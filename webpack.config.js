'use strict'
const { VueLoaderPlugin } = require('vue-loader');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, "public"),
        publicPath: '/',
        filename: "scripts/app.bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /.(js)$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
        {
            test: /.(css|scss)$/,
            use: [
                {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: process.env.NODE_ENV === 'development',
                  reloadAll: true,
                  
                },
              },
                "css-loader",
                "sass-loader"
            ]
          },
          {
            test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[path][name]-[hash:8].[ext]"
                }
              }
            ]
          }
      ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        // https: false, // true for self-signed, object for cert authority
        // noInfo: true, // only errors & warns on hot reload
        open:true,
        inline: true,
        stats:"errors-only",
        // ...
    },
    plugins: [

        new MiniCssExtractPlugin({
        filename: "styles/[name].css",
        chunkFilename: "[id].css"
        }),

        new VueLoaderPlugin()
    ]
}