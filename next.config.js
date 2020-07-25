// next.config.js
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

const APP_ENV = process.env.APP_ENV || process.env.REACT_APP_APP_ENV || 'dev';

module.exports = withImages(
  withCSS({
    /* config options here */
    webpack: function (config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return config;
    },
    env: {
      APP_ENV: APP_ENV,
    },
  })
);
