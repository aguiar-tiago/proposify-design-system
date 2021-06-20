import React from 'react';
import ThemeProvider from "./providers/theme-provider";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }

  export const decorators = [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ];