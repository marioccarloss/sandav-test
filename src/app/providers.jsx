import ErrorBoundary from '@/components/boundaries/error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { useThemeStore } from '../store/theme-store';
import { GlobalStyles } from '../theme/global-styles';
import { darkTheme, lightTheme } from '../theme/main-theme';

const queryClient = new QueryClient();

export function Providers({ children }) {
  const { theme } = useThemeStore();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ErrorBoundary>
      <StyleSheetManager>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={currentTheme}>
            {children}
            <GlobalStyles />
          </ThemeProvider>
        </QueryClientProvider>
      </StyleSheetManager>
    </ErrorBoundary>
  );
}
