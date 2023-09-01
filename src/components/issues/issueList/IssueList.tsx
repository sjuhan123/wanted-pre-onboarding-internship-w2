import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIssueListContext } from '../../../context/IssueListContext';
import AdImage from '../adImage/AdImage';
import IssueItem from '../issueItem/IssueItem';
import * as S from './style';

const IssueList = () => {
  const navigate = useNavigate();
  const { state } = useIssueListContext();

  const redirectIssueDetail = (number: number) => {
    navigate(`/issues/${number}`);
  };

  return (
    <S.IssueListBox>
      {state &&
        state.map(({ number, title, user: { login }, created_at, comments }, index) => {
          return (
            <React.Fragment key={index}>
              <IssueItem
                number={number}
                title={title}
                author={login}
                createdAt={created_at}
                comments={comments}
                onClick={() => redirectIssueDetail(number)}
              />
              {(index + 1) % 4 === 0 && <AdImage />}
            </React.Fragment>
          );
        })}
    </S.IssueListBox>
  );
};

export default IssueList;
