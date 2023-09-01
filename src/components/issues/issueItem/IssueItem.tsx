import React from 'react';
import * as S from './style';

interface IssueItemProps {
  number: number;
  title: string;
  user: string;
  createdAt: string;
  comments: number;
  onClick?: () => void;
}

export default function IssueItem({
  number,
  title,
  user,
  createdAt,
  comments,
  onClick,
}: IssueItemProps) {
  return (
    <S.IssueItemBox onClick={onClick}>
      <S.IssueItemLeft>
        <div>
          <S.IssueItemNumber>#{number}</S.IssueItemNumber>
          <S.IssueItemTitle>{title}</S.IssueItemTitle>
        </div>
        <div>
          <S.IssueItemAuthor>작성자: {user},</S.IssueItemAuthor>
          <S.IssueItemCreatedAt>작성일: {createdAt}</S.IssueItemCreatedAt>
        </div>
      </S.IssueItemLeft>
      <S.IssueItemRight>
        <S.IssueItemComments>코멘트: {comments}</S.IssueItemComments>
      </S.IssueItemRight>
    </S.IssueItemBox>
  );
}
