import styled from 'styled-components';

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e1e4e8;
  margin-bottom: 2rem;
  width: 50%;
  gap: 20px;
`;

export const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const IssueInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const IssueInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const IssueInfoRight = styled.div`
  display: flex;
  align-items: center;
`;

export const IssueNumber = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const IssueTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const IssueAuthor = styled.span`
  font-size: 1rem;
  color: #586069;
`;

export const IssueCreatedAt = styled.span`
  font-size: 1rem;
  color: #586069;
`;

export const IssueComments = styled.span`
  font-size: 1rem;
  color: #586069;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  width: 700px;
  overflow-y: auto;
`;
