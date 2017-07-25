
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js');
config.entry.app.unshift("webpack-dev-server/client?http://localhost:3000/", 
	"webpack/hot/dev-server");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, config.devServer);
server.listen(3000);