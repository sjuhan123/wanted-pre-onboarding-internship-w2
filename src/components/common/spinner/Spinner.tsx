import React from 'react';
import * as S from './style';

export interface SpinnerProps {
  type: 'button' | 'page';
}

const Spinner = ({ type }: SpinnerProps) => {
  if (type === 'page') {
    return (
      <S.SpinnerPageBox type={type}>
        <S.SpinnerComp type={type} />
      </S.SpinnerPageBox>
    );
  } else {
    return (
      <S.SpinnerButtonBox type={type}>
        <S.SpinnerComp type={type} />
      </S.SpinnerButtonBox>
    );
  }
};

export default Spinner;
