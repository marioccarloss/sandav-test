import React from 'react';
import Header from './header';
import { Content, MainLayout } from './layout.styled';

const Layout = ({ children }) => {
  return (
    <MainLayout>
      <Header />
      <Content>
        {children}
      </Content>
    </MainLayout>
  );
};

export default Layout;
