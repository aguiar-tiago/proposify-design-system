const path = require('path');

module.exports = ({ config, mode }) => {
  return Object.assign(config, {
    resolve: {
      alias: {
        '@proposify-design-system/storybook': path.resolve(__dirname),
        '@proposify-design-system/src': path.resolve(__dirname, '../src/components/')
      },
    },
  });
};