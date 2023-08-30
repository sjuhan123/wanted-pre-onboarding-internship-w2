import React, { ReactNode } from 'react';
import * as S from './style';

interface LayoutProps {
  buttonName?: string;
  buttonOnClick?: () => void;
  title: string;
  titleOnClick?: () => void;
  children: ReactNode;
}

const Layout = ({ buttonName, buttonOnClick, title, titleOnClick, children }: LayoutProps) => {
  return (
    <S.LayoutBox>
      <header>
        {buttonName && <button onClick={buttonOnClick}>{buttonName}</button>}
        <h1 onClick={titleOnClick}>{title}</h1>
      </header>
      <main>{children}</main>
    </S.LayoutBox>
  );
};

export default Layout;
