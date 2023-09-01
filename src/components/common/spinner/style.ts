import styled, { keyframes } from 'styled-components';

export interface SpinnerProps {
  type: 'button' | 'page';
}

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerButtonBox = styled.div<SpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ type }) => (type === 'page' ? '10vh' : 'auto')};
`;

export const SpinnerPageBox = styled.div<SpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

export const SpinnerComp = styled.div<SpinnerProps>`
  display: flex;
  box-sizing: border-box;
  width: ${({ type }) => (type === 'page' ? '30px' : '13px')};
  height: ${({ type }) => (type === 'page' ? '30px' : '13px')};
  border: 3px solid ${({ type }) => (type === 'page' ? '#000' : '#fff')};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
