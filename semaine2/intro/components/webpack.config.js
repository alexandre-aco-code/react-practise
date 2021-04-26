const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },

    devServer: {
        hot: true,
        contentBase: "./dist",
        watchOptions: {
            ignored: "node_modules/",
        },
    },


    plugins: [
        new HtmlWebpackPlugin({
            title: "Welcome",
            template: "./index.html",
        }),

        new MiniCssExtractPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                use: "raw-loader",
            },
            {
                test: /\.js$/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
};



