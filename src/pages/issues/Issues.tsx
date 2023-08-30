import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/common/Layout/Layout';
import Spinner from '../../components/common/spinner/Spinner';
import IssueList from '../../components/issues/issueList/IssueList';
import { ISSUE_LIST, STATUS, URL } from '../../constants';
import { useIssueListContext } from '../../context/IssueListContext';
import { useRepoContext } from '../../context/RepoContext';
import useOctokit from '../../hooks/useOctokit';
import { TIssueList } from '../../types/issue';

export default function Issues() {
  const navigate = useNavigate();
  const {
    state: { organization, repository },
  } = useRepoContext();
  const { dispatch } = useIssueListContext();

  const { data, status } = useOctokit<TIssueList>(
    `/repos/${organization}/${repository}/issues?per_page=10&sort=comments`,
    {
      owner: organization,
      repo: repository,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
    true,
  );

  useEffect(() => {
    if (data && status === STATUS.SUCCESS) {
      dispatch({ type: ISSUE_LIST.SET, payload: [...data] });
    }
  }, [data]);

  useEffect(() => {
    if (!organization || !repository) {
      navigate(URL.Main);
    }
  }, [organization, repository]);

  return (
    <Layout
      buttonName='홈'
      buttonOnClick={() => navigate(URL.Main)}
      title={`${organization}/${repository}`}
      titleOnClick={() => window.location.reload()}
    >
      {status === STATUS.LOADING ? <Spinner type='page' /> : <IssueList />}
    </Layout>
  );
}
