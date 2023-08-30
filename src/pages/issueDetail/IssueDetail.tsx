import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/common/Layout/Layout';
import Spinner from '../../components/common/spinner/Spinner';
import Content from '../../components/issueDetail/content/Content';
import { STATUS, URL } from '../../constants';
import { useRepoContext } from '../../context/RepoContext';
import useOctokit from '../../hooks/useOctokit';
import { IIssueDetail } from '../../types/issueDetail';

export default function IssueDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    state: { owner, repo },
  } = useRepoContext();

  const { data: details, status } = useOctokit<IIssueDetail>(
    `/repos/${owner}/${repo}/issues/${id}`,
    {
      owner: owner,
      repo: repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
    true,
  );

  useEffect(() => {
    if (!owner || !repo) {
      navigate(URL.Main);
    }
  }, [owner, repo]);

  return (
    <Layout
      buttonName='목록'
      buttonOnClick={() => navigate(URL.Issues)}
      title={`${owner}/${repo}`}
      titleOnClick={() => navigate(URL.Issues)}
    >
      {status === STATUS.LOADING && !details ? (
        <Spinner type='page' />
      ) : (
        <Content details={details} />
      )}
    </Layout>
  );
}
