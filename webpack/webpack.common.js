const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const assetsFolderName = 'assets';

// TODO: update dummy text with real one
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: `${assetsFolderName}/[name]-[hash][ext][query]`,
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(jpe?g|png|webp)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
            name: `${assetsFolderName}/responsive-images/[name]-[hash]-[width].[ext]`,
          },
        },
      },
      {
        test: /\.(pdf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      templateParameters: (compilation) => {
        const displayImage = compilation
          .getAssets()
          .find((file) => file.name.indexOf('desert-self2') > -1);

        return {
          title: 'Mayank Suman - A Front end engineer',
          siteName: 'Mayank Suman Portfolio',
          description:
            'I am Mayank Suman a frontend engineer who is creating and fixing UIs for over 9 years. I am well-versed in technologies like HTML, CSS, JS and their related frameworks / Libraries like reactJS, etc.',
          keywords:
            'html, css, javascript, react, reactjs, frontend, developer, engineer, mayank suman, development',
          author: 'Mayank Suman',
          image: displayImage.name,
          imageAlt: 'Mayank Suman display picture',
          url: 'https://www.mayanksuman.dev',
          twitterUserId: 'mayanksuman7',
        };
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
