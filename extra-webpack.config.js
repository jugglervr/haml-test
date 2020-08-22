const merge = require('webpack-merge');

module.exports = function (angularConfig) {
  console.log("custom webpackin");
    return merge(angularConfig, {
        module: {
            rules: [
              { test: /\.haml$/, loader: 'haml-haml-loader' }
            ]
          }
        })
    }