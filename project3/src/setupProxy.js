const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://192.249.18.249:3000',
            changeOrigin: true,
        })      
    );
};