const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "/";

const PATHS = {
  source: path.join(__dirname, "src"),
  build: path.resolve(__dirname, "docs")
};

const common = merge([
  {
    entry: {
      index: PATHS.source + "/index.js",
      landing: PATHS.source + "/pages/website_pages/landing/landing.js",
      searchRoom:
        PATHS.source + "/pages/website_pages/searchRoom/searchRoom.js",
      registration:
        PATHS.source + "/pages/website_pages/registration/registration.js",
      cards: PATHS.source + "/pages/uikit/cards/cards.js",
      colorsType: PATHS.source + "/pages/uikit/colorsType/colorsType.js",
      formElements: PATHS.source + "/pages/uikit/formElements/formElements.js",
      headersAndFooters:
        PATHS.source + "/pages/uikit/headersAndFooters/headersAndFooters.js"
    },
    output: {
      path: PATHS.build,
      filename: "[name]/[name].js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
       /*  chunks: ["index"], */
        template: PATHS.source + "/index.pug"
      }),
      new HtmlWebpackPlugin({
        filename: "landing/index.html",
        chunks: ["landing"],
        template: PATHS.source + "/pages/website_pages/landing/landing.pug"
      }),
      new HtmlWebpackPlugin({
        filename: "searchRoom/index.html",
        chunks: ["searchRoom"],
        template:
          PATHS.source + "/pages/website_pages/searchRoom/searchRoom.pug"
      }),
      new HtmlWebpackPlugin({
        filename: "registration/index.html",
        chunks: ["registration"],
        template:
          PATHS.source + "/pages/website_pages/registration/registration.pug"
      }),
      new HtmlWebpackPlugin({
        filename: "cards/index.html",
        chunks: ["cards"],
        template: PATHS.source + "/pages/uikit/cards/cards.pug"
      }),
      new HtmlWebpackPlugin({
        filename: "colorsType/index.html",
        chunks: ["colorsType"],
        template: PATHS.source + "/pages/uikit/colorsType/colorsType.pug"
      }),
      new HtmlWebpackPlugin({
        filename: "formElements/index.html",
        chunks: ["formElements"],
        template: PATHS.source + "/pages/uikit/formElements/formElements.pug"
      }),
      new HtmlWebpackPlugin({
        filename: "headersAndFooters/index.html",
        chunks: ["headersAndFooters"],
        template:
          PATHS.source + "/pages/uikit/headersAndFooters/headersAndFooters.pug"
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new CopyWebpackPlugin([
        {
          from: PATHS.source + "/assets",
          to: PATHS.build + "/assets"
        }
      ])
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
          test: /\.(jpg|png|svg|gif)$/,
          loader: "file-loader",
          exclude: /fonts/,
          options: {
            name: "[name].[ext]"
          }
        },
        {
          test: /\.(woff|ttf|svg)$/,
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
