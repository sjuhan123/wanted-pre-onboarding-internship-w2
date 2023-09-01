import styled, { keyframes } from 'styled-components';

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  gap: 0.5rem;
  width: 100%;

  > input {
    width: 300px;
    height: 20px;
    padding: 0.5rem;
    border: 1px solid #000000;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  > button {
    width: 200px;
    height: 40px;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
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
