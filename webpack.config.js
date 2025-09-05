const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource', // Maneja fuentes
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
devServer: {
  static: {
    directory: path.join(__dirname, 'public'),
  },
  hot: true,
  port: 3000,
  open: true,
  devMiddleware: {
    writeToDisk: true,
  },
},
  mode,
};