import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRepoIssueList } from '../../apis/requests';
import Layout from '../../components/common/Layout/Layout';
import Spinner from '../../components/common/spinner/Spinner';
import IssueList from '../../components/issues/issueList/IssueList';
import NotFound from '../../components/notFound/NotFound';
import { ISSUE_LIST, STATUS, PATH } from '../../constants';
import { useIssueListContext } from '../../context/IssueListContext';
import { useRepoContext } from '../../context/RepoContext';
import useOctokit from '../../hooks/useOctokit';
import { IissueList } from '../../types/index';

export default function Issues() {
  const navigate = useNavigate();
  const {
    state: { owner, repo },
  } = useRepoContext();
  const { dispatch } = useIssueListContext();

  const { data, status, errorMessage } = useOctokit<IissueList>(() =>
    getRepoIssueList(owner, repo, 1),
  );

  useEffect(() => {
    if (data && status === STATUS.SUCCESS) {
      dispatch({ type: ISSUE_LIST.SET, payload: [...data] });
    }
  }, [data, status]);

  useEffect(() => {
    if (!owner || !repo) {
      navigate(PATH.MAIN);
    }
  }, [owner, repo]);

  return (
    <Layout
      buttonName='홈'
      buttonOnClick={() => navigate(PATH.MAIN)}
      title={`${owner}/${repo}`}
      titleOnClick={() => window.location.reload()}
    >
      {status === STATUS.LOADING && <Spinner type='page' />}
      {status === STATUS.ERROR && <NotFound errorMessage={errorMessage} />}
      {status === STATUS.SUCCESS && <IssueList />}
    </Layout>
  );
}
