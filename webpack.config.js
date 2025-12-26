const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      main: './src/js/main.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'video/[name][ext]',
          },
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            sources: {
              list: [
                {
                  tag: 'img',
                  attribute: 'src',
                  type: 'src',
                },
                {
                  tag: 'source',
                  attribute: 'src',
                  type: 'src',
                },
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/patterns.html',
        filename: 'patterns.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/articles.html',
        filename: 'articles.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/screens.html',
        filename: 'screens.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/styleguide.html',
        filename: 'styleguide.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-1.html',
        filename: 'content/articles/article-1.html',
        chunks: ['main'],
      }),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: 'css/[name].[contenthash].css',
            }),
          ]
        : []),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/favicon.svg', to: 'favicon.svg' },
          { from: 'src/video', to: 'video' },
        ],
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8080,
      hot: true,
      open: true,
      historyApiFallback: false,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};

