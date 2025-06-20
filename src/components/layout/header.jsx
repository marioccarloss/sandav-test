import { Link } from '@tanstack/react-router';
import React from 'react';
import { ThemeSwitcher } from '../ui/theme-switcher/theme-switcher';
import { AppTitle, HeaderContainer } from './header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <AppTitle>Batalla Pokémon</AppTitle>
      </Link>
      <ThemeSwitcher />
    </HeaderContainer>
  );
};

export default Header;
