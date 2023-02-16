import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import TopNav from '@/complex-components/TopNav';

export interface LayoutProps {
  children?: React.ReactNode;
  hideNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideNav }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        {!hideNav && (<TopNav/>)}
        <main>
          {children}
        </main>
      </>
    </ThemeProvider>
  );
};

export default Layout;
