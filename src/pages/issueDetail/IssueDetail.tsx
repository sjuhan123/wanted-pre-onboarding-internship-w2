import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getIssueDetail } from '../../apis/requests';
import Layout from '../../components/common/Layout/Layout';
import Spinner from '../../components/common/spinner/Spinner';
import Content from '../../components/issueDetail/content/Content';
import NotFound from '../../components/notFound/NotFound';
import { STATUS, PATH } from '../../constants';
import { useRepoContext } from '../../context/RepoContext';
import useOctokit from '../../hooks/useOctokit';
import { IissueDetail } from '../../types/index';

export default function IssueDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    state: { owner, repo },
  } = useRepoContext();

  const {
    data: details,
    status,
    errorMessage,
  } = useOctokit<IissueDetail>(() => getIssueDetail(owner, repo, Number(id)));

  useEffect(() => {
    if (!owner || !repo) {
      navigate(PATH.MAIN);
    }
  }, [owner, repo]);

  return (
    <Layout
      buttonName='목록'
      buttonOnClick={() => navigate(PATH.ISSUES)}
      title={`${owner}/${repo}`}
      titleOnClick={() => navigate(PATH.ISSUES)}
    >
      {status === STATUS.LOADING && <Spinner type='page' />}
      {status === STATUS.ERROR && <NotFound errorMessage={errorMessage} />}
      {status === STATUS.SUCCESS && <Content details={details} />}
    </Layout>
  );
}
