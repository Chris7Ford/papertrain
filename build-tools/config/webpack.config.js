const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const projectRoot = path.resolve(__dirname, '../../');

module.exports = {
    mode: "production",
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    entry: [ path.resolve(projectRoot, "app/scripts/App.ts"),  path.resolve(projectRoot, "app/sass/main.scss")],
    devtool: "source-map",
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    name: 'app.js'
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    output: {
        path: path.resolve(projectRoot, "public/assets"),
        filename: 'scripts/app.js'
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/main.css",
            chunkFilename: "[id].css"
        }),
        new UglifyJsPlugin({
            extractComments: true
        })
    ]
  };