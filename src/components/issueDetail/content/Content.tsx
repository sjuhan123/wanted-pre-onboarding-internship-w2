import React from 'react';
import ReactMarkdown from 'react-markdown';
import { IIssueDetail } from '../../../types/issueDetail';
import * as S from './style';

interface ContentProps {
  details?: IIssueDetail;
}

export default function Content({ details }: ContentProps) {
  if (!details) {
    return <div>No content available.</div>;
  }

  const { user, number, title, created_at, comments, body } = details;

  return (
    <S.ContentBox>
      <S.ContentHeader>
        <S.UserImage src={user.avatar_url} alt={user.login} />
        <S.IssueInfo>
          <S.IssueInfoLeft>
            <div>
              <S.IssueNumber>#{number}</S.IssueNumber>
              <S.IssueTitle>{title}</S.IssueTitle>
            </div>
            <div>
              <S.IssueAuthor>작성자: {user.login},</S.IssueAuthor>
              <S.IssueCreatedAt>작성일: {created_at}</S.IssueCreatedAt>
            </div>
          </S.IssueInfoLeft>
          <S.IssueInfoRight>
            <S.IssueComments>코멘트: {comments}</S.IssueComments>
          </S.IssueInfoRight>
        </S.IssueInfo>
      </S.ContentHeader>
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt='' />,
        }}
      >
        {body}
      </ReactMarkdown>
    </S.ContentBox>
  );
}
