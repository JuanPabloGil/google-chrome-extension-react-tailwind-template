
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
    options: path.resolve('src/options/options.tsx'),
    background: path.resolve('src/background/background.ts'),
    contentScript: path.resolve('src/contentScript/contentScript.ts')
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                indent: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
        test: /\.css$/i,
      },
      {
        type: 'asset/resource',
        test: /\.(jpg|jpeg|png|svg|webp)$/,
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: path.resolve('src/static'),
        to: path.resolve('dist')
      }]
    }),
    ...getHtmlPlugin([
      'popup',
      'options'
    ]),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    })
  ],
  resolve: {
    extensions: ['tsx', 'ts', 'js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}

function getHtmlPlugin(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    name: '{{projectName}}',
    filename: `${chunk}.html`,
    chunks: [chunk],
  }))
}