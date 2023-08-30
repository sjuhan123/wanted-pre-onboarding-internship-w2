import React from 'react';
import * as S from '../issueItem/style';

export default function AdImage() {
  return (
    <S.IssueItemBox onClick={() => (window.location.href = 'https://www.wanted.co.kr/')}>
      <img
        src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
        alt='wanted'
        loading='lazy'
      />
    </S.IssueItemBox>
  );
}
