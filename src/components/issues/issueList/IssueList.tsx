import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIssueListContext } from '../../../context/IssueListContext';
import IssueItem from '../issueItem/IssueItem';
import * as S from './style';

export default function IssueList() {
  const navigate = useNavigate();
  const { state } = useIssueListContext();

  const redirectIssueDetail = (number: number) => {
    navigate(`/issues/${number}`);
  };

  return (
    <S.IssueListBox>
      {state &&
        state.map(({ number, title, user: { login }, created_at, comments }) => {
          return (
            <IssueItem
              key={number}
              number={number}
              title={title}
              author={login}
              createdAt={created_at}
              comments={comments}
              onClick={() => redirectIssueDetail(number)}
            />
          );
        })}
    </S.IssueListBox>
  );
}
