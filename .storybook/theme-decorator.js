import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

const ThemeDecorator = storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator;