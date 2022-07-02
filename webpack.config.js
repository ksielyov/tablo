const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** utils */
const isProductionMode = process.env.NODE_ENV === 'production';

const getFileName = (ext) =>
  isProductionMode ? `bundle.${ext}` : `bundle.[chunkhash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: getFileName('js'),
    path: path.resolve(__dirname, 'dest'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@core': path.resolve(__dirname, 'src', 'core'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: !isProductionMode ? 'source-map' : undefined,
  devServer: {
    port: 3000,
    hot: !isProductionMode,
    static: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'favicon.ico'),
          to: path.resolve(__dirname, 'dest', 'favicon.ico'),
        },
      ],
    }),
    new MiniCssExtractPlugin({ filename: getFileName('css') }),
  ],
};
