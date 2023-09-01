import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRepoIssueList } from '../../apis/requests';
import Layout from '../../components/common/Layout/Layout';
import Spinner from '../../components/common/spinner/Spinner';
import AdImage from '../../components/issues/adImage/AdImage';
import IssueItem from '../../components/issues/issueItem/IssueItem';
import NotFound from '../../components/notFound/NotFound';
import { STATUS, PATH } from '../../constants';
import { useRepoContext } from '../../context/RepoContext';
import useObserver from '../../hooks/useObserver';
import useOctokit from '../../hooks/useOctokit';
import { IissueList, IissueSummary } from '../../types/index';
import * as S from './style';

export default function Issues() {
  const navigate = useNavigate();
  const {
    state: { owner, repo },
  } = useRepoContext();
  const [issueList, setIssueList] = useState<IissueList>([]);
  const [page, setPage] = useState(1);

  const { data, status, errorMessage, requestOctokit } = useOctokit<IissueList>(() =>
    getRepoIssueList(owner, repo, page),
  );

  const updatePage = () => {
    setPage((prev) => prev + 1);
  };

  const scrollButtomRef = useObserver(updatePage, status);

  useEffect(() => {
    requestOctokit({
      callback: () => getRepoIssueList(owner, repo, page),
    });
  }, [page]);

  useEffect(() => {
    if (data) {
      setIssueList((prev) => [...prev, ...data]);
    }
  }, [data]);

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
      {issueList &&
        issueList.map(
          ({ title, number, comments, created_at, user }: IissueSummary, index: number) => (
            <React.Fragment key={index}>
              <S.IssueLink to={`${number}`}>
                <IssueItem
                  title={title}
                  number={number}
                  comments={comments}
                  createdAt={created_at}
                  user={user.login}
                />
              </S.IssueLink>
              {(index + 1) % 4 === 0 && <AdImage />}
            </React.Fragment>
          ),
        )}
      {issueList?.length !== 0 && <div ref={scrollButtomRef} />}
    </Layout>
  );
}
