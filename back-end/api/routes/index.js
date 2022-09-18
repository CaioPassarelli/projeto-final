const bodyParser = require('body-parser');
const produtos = require('./produtosRoute.js');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(produtos);
    
}