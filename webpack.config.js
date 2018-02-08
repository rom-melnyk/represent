const path = require('path');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');


module.exports = (env) => {
    const isProd = env && env.PROD;
    const directory = path.resolve(__dirname);

    console.log('\n-----------------------------------');
    console.log(`- Environment: ${isProd ? 'PRODUCTION' : 'development'}`);
    console.log('-----------------------------------\n');

    return {
        context: directory, // `webpack.config.js` directory
        entry: './src/js/script.js',
        output: {
            path: directory,
            filename: 'script.js'
        },
        resolve: {
            modules: [ 'node_modules', directory ]
        },
        target: 'web',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader', options: isProd ? { minimize: true } : { sourceMap: true } },
                        { loader: 'sass-loader', options: isProd ? {} : { sourceMap: true } }
                    ],
                    // fallback: 'style-loader'
                }
            ]
        },
        plugins: isProd ? [ new BabiliPlugin({}) ] : [],
        devtool: isProd ? false : 'source-map',
        watchOptions: {
            ignored: /node_modules/,
            poll: 1000
        }
    };
};
