import styled, { keyframes } from 'styled-components';

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  gap: 0.5rem;
`;

const shakeAnimation = keyframes`
  0% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(-2px);
  }
`;

export const AlertNotice = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 0.5rem;
  color: #ff0000;
  margin: 0;
  animation: ${shakeAnimation} 0.1s linear;
`;
