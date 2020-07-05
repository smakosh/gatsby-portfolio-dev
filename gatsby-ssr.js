import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
