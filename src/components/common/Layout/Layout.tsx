import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

interface LayoutProps {
  header: string;
  navigateTarget?: string;
  children: ReactNode;
}

const Layout = ({ header, navigateTarget, children }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <S.LayoutBox>
      <header onClick={() => (!navigateTarget ? navigate('/') : navigate(`/${navigateTarget}`))}>
        {header}
      </header>
      <main>{children}</main>
    </S.LayoutBox>
  );
};

export default Layout;
