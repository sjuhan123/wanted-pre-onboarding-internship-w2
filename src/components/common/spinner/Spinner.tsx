import React from 'react';
import * as S from './style';

export default function Spinner({ type }: S.SpinnerProps) {
  return type === 'page' ? (
    <S.SpinnerBox>
      <S.Spinner type={type} />
    </S.SpinnerBox>
  ) : (
    <S.Spinner type={type} />
  );
}
