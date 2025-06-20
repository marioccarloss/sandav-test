import { useThemeStore } from '@/store/theme-store';
import { MoonIcon } from '../icons/moon-icon';
import { SunIcon } from '../icons/sun-icon';
import { SwitcherButton } from './theme-switcher.styled';

export const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useThemeStore();
  const isLight = theme === 'light';

  return (
    <SwitcherButton onClick={toggleTheme} title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}>
      {isLight ? <MoonIcon /> : <SunIcon />}
    </SwitcherButton>
  );
};
