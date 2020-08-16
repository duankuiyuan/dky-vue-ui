const path = require('path');

module.exports = {
//   chainWebpack: (config) => {
//     config.resolve.alias.set('@element', path.resolve(__dirname, 'src/components/element'));
//   },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
};
