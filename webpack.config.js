const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const PATHS = {
  source: path.join(__dirname, "src"),
  build: path.join(__dirname, "docs")
};

const common = merge([
  {
    entry: { 
      index: PATHS.source + "/index.js",
      cards: PATHS.source + "/pages/cards/cards.js"
    },
    output: {
      path: PATHS.build,
      filename: "[name]/[name].js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: PATHS.source + "/index.pug"
      }),
      new HtmlWebpackPlugin({
        filename: "cards/index.html",
        template: PATHS.source + "/pages/cards/cards.pug"
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: "pug-loader",
          options: {
            pretty: true
          }
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: "file-loader",
          exclude: /fonts/,
          options: {
            name: "images/[name].[ext]"
          }
        },
        {
          test: /\.(woff|svg|ttf)$/,
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      ]
    }
  }
]);

const production = merge([
  {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name]/[name].css" })]
  }
]);

const development = merge([
  {
    devServer: {
      stats: "errors-only",
      port: 9200
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
  }
]);

module.exports = function(env) {
  if (env === "production") {
    return merge([common, production]);
  }
  if (env === "development") {
    return merge([common, development]);
  }
};
