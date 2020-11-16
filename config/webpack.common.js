/* eslint-disable @typescript-eslint/no-var-requires */
const paths = require('./paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  entry: [
    'core-js/modules/es.promise',
    'core-js/modules/es.array.iterator',
    paths.src + '/index.tsx',
  ],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: '',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: paths.src + '/static/template.html',
      filename: 'index.html',
      cspPlugin: {
        enabled: true,
        policy: {
          'base-uri': "'self'",
          'object-src': "'none'",
          'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
          'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
        },
        hashingMethod: 'sha256',
        hashEnabled: {
          'script-src': true,
          'style-src': true,
        },
        nonceEnabled: {
          'script-src': true,
          'style-src': true,
        },
      },
    }),
    new CspHtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'media/[name].[contenthash].[ext]',
            },
          },
          {
            loader: require.resolve('image-webpack-loader'),
            options: {
              bypassOnDebug: devMode,
              disable: devMode,
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
};
