import styled from 'styled-components';

export const IssueItemBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e1e4e8;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  gap: 1rem;

  &:hover {
    background-color: #f6f8fa;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const IssueItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const IssueItemRight = styled.div`
  display: flex;
  align-items: center;
`;

export const IssueItemNumber = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const IssueItemTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const IssueItemAuthor = styled.span`
  font-size: 1rem;
  color: #586069;
`;

export const IssueItemCreatedAt = styled.span`
  font-size: 1rem;
  color: #586069;
`;

export const IssueItemComments = styled.span`
  font-size: 1rem;
  color: #586069;
`;
