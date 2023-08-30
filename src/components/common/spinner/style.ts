import styled, { keyframes } from 'styled-components';

export interface SpinnerProps {
  type: 'button' | 'page';
}

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<SpinnerProps>`
  display: flex;
  box-sizing: border-box;
  width: ${({ type }) => (type === 'page' ? '30px' : '13px')};
  height: ${({ type }) => (type === 'page' ? '30px' : '13px')};
  border: 3px solid ${({ type }) => (type === 'page' ? '#000' : '#fff')};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
