module.exports = {
    context: __dirname + '/js',
    entry: {
        index: './entrypoints/index',
        registration: './entrypoints/registration',
    },
    output: {
        filename: '[name].entry.js',
        path: './dist',
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel-loader' },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
};
