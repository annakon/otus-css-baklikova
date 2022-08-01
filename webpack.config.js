const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        filename: "../main.js",
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    module: {
        rules: [
            {test: /\.html$/, use: 'html-loader'},
            { test: /\.(js)$/, use: "babel-loader" },
            {test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // Images: Copy image files to build folder
            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

            // Fonts and SVGs: Inline files
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                type: 'asset/inline',
            },
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
