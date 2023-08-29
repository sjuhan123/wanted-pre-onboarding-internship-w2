import styled, { keyframes } from 'styled-components';

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 13px;
  height: 13px;
  border: 3px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
