const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        filename: "../main.js",
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: "babel-loader" },
            { test: /\.(css)$/, use: ["style-loader","css-loader"] }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html"
        })
    ],
    devServer: {
        compress: false,
        open: "/",
        port: 3001,
    },
};
