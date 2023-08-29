import React, { FormEvent } from 'react';
import * as S from './style';

interface ButtonProps extends S.ButtonStyleProps {
  onClick?: (e: FormEvent) => void;
  buttonContent: string | JSX.Element;
}

const Button = ({ type, onClick, buttonContent }: ButtonProps) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {buttonContent}
    </S.Button>
  );
};

export default Button;
