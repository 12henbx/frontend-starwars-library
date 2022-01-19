const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        ['/.netlify/functions/index'],
        createProxyMiddleware({
          target: 'https://swapi-graphql.netlify.app/',
          changeOrigin: true,
        })
      );
      
};