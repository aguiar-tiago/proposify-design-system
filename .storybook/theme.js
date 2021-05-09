import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Proposify Design System',
  brandUrl: 'https://www.proposify.com/',
  brandImage: 'https://cdn.cbgf.com/wp-content/uploads/2020/05/proposify-logo.png',
  
  // UI
  appBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#00b8d1',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

});