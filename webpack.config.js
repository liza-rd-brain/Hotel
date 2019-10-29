const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const PATHS = {
  source: path.join(__dirname, "src"),
  source_assets: path.join(__dirname, "src/assets"),
  build: path.join(__dirname, "docs"),
  build_assets: path.join(__dirname, "docs/assets")
};

const common = {
  entry: {
    index: PATHS.source + "/index.js",
    landing: PATHS.source + "/pages/website_pages/landing/landing.js",
    searchRoom: PATHS.source + "/pages/website_pages/searchRoom/searchRoom.js",
    cards: PATHS.source + "/pages/uikit/cards/cards.js",
    colorsType: PATHS.source + "/pages/uikit/colorsType/colorsType.js",
    formElements: PATHS.source + "/pages/uikit/formElements/formElements.js",
    headersAndFooters:
      PATHS.source + "/pages/uikit/headersAndFooters/headersAndFooters.js"
  },
  /*   output: {
    path: PATHS.build,
    filename: "[name]/[name].js"
  }, */
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
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
      template: PATHS.source + "/pages/website_pages/searchRoom/searchRoom.pug"
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
    new CopyPlugin([
      {
        from: PATHS.source_assets,
        to: PATHS.build_assets
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
          name: "assets/img/[name].[ext]"
        }
      },
      {
        test: /\.(woff|ttf|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/fonts/[name].[ext]"
        }
      }
    ]
  }
};
const production = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name]/[name].css" })]
};

const development = {
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
};

module.exports = function(env) {
  const output = {
    path: PATHS.build,
    filename: "[name]/[name].js"
  };

  switch (env) {
    case "production":
      return merge([
        common,
        {
          output: {
            ...output,
            publicPath: "../"
          }
        },
        production
      ]);

    default:
      return merge([
        common,
        {
          output: {
            ...output,
            publicPath: "/"
          }
        },
        development
      ]);
  }
};
