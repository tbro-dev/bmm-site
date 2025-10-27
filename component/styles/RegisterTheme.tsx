"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/component/styles/theme';

interface RegisterThemeProps {
    children: ReactNode;
}

const RegisterTheme: FC<RegisterThemeProps> = ({ children }) => {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default RegisterTheme;