import styled from 'styled-components';

export interface ButtonStyleProps {
  type: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  height: 20px;
  width: 100%;
  color: #fff;
  background-color: ${({ type }) => (type === 'primary' ? '#999' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
