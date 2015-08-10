module.exports = {
    context: __dirname + '/js',
    entry: {
        index: ['./entrypoints/index', 'webpack/hot/only-dev-server'],
        user: ['./entrypoints/user', 'webpack/hot/only-dev-server'],
        devServerClient: 'webpack-dev-server/client?http://0.0.0.0:3000'
    },
    output: {
        filename: '[name].entry.js',
        path: './dist',
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['react-hot', 'babel-loader'] },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
};
