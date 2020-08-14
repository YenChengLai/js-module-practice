const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),  // use pathModule of NodeJS to generate path automatically
        filename: 'bundle.js'                    // __dirname is the constant of NodeJS, representing current directory
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            // {
            //     use: ['style-loader', 'css-loader'],  // the order is important, dealed from right to left
            //     test: /\.css$/
            // }
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    mode: 'production'
};

module.exports = config;