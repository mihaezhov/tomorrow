const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

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
      publicPath: isProduction ? '/tomorrow/' : '/',
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
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-2.html',
        filename: 'content/articles/article-2.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-3.html',
        filename: 'content/articles/article-3.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-4.html',
        filename: 'content/articles/article-4.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-5.html',
        filename: 'content/articles/article-5.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-6.html',
        filename: 'content/articles/article-6.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-7.html',
        filename: 'content/articles/article-7.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-8.html',
        filename: 'content/articles/article-8.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-9.html',
        filename: 'content/articles/article-9.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-10.html',
        filename: 'content/articles/article-10.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-11.html',
        filename: 'content/articles/article-11.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-12.html',
        filename: 'content/articles/article-12.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-13.html',
        filename: 'content/articles/article-13.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-14.html',
        filename: 'content/articles/article-14.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-15.html',
        filename: 'content/articles/article-15.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-16.html',
        filename: 'content/articles/article-16.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-17.html',
        filename: 'content/articles/article-17.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-18.html',
        filename: 'content/articles/article-18.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-19.html',
        filename: 'content/articles/article-19.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-20.html',
        filename: 'content/articles/article-20.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-21.html',
        filename: 'content/articles/article-21.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-22.html',
        filename: 'content/articles/article-22.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-23.html',
        filename: 'content/articles/article-23.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-24.html',
        filename: 'content/articles/article-24.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/articles/article-25.html',
        filename: 'content/articles/article-25.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/screens/screen-1.html',
        filename: 'content/screens/screen-1.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/patterns/pattern-1.html',
        filename: 'content/patterns/pattern-1.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/patterns/pattern-2.html',
        filename: 'content/patterns/pattern-2.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/patterns/pattern-3.html',
        filename: 'content/patterns/pattern-3.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/patterns/pattern-4.html',
        filename: 'content/patterns/pattern-4.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/patterns/pattern-5.html',
        filename: 'content/patterns/pattern-5.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/content/patterns/pattern-6.html',
        filename: 'content/patterns/pattern-6.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/quiz.html',
        filename: 'quiz.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/quiz-swipe.html',
        filename: 'quiz-swipe.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/tests.html',
        filename: 'tests.html',
        chunks: ['main'],
      }),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: 'css/[name].[contenthash].css',
            }),
          ]
        : []),
      new Dotenv(),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/favicon.svg', to: 'favicon.svg' },
          { from: 'src/video', to: 'video' },
          { from: 'src/img', to: 'img' },
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
      open: '/index.html',
      historyApiFallback: false,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};

