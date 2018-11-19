const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CrittersPlugin = require('critters-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const htmlPlugin = new HtmlPlugin({
  template: `${__dirname}/src/index.html`,
})

const styleOrExtractLoader = isProd
  ? MiniCssExtractPlugin.loader
  : 'style-loader'

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: isProd
    ? [
        new CleanPlugin(['dist']),
        htmlPlugin,
        new MiniCssExtractPlugin(),
        new CrittersPlugin(),
      ]
    : [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: `${__dirname}/src`,
        use: ['babel-loader'],
      },
      {
        oneOf: [
          {
            test: /\.module\.css$/,
            include: `${__dirname}/src`,
            use: [
              styleOrExtractLoader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: isProd
                    ? '[hash:base64]'
                    : '[name]__[local]--[hash:base64:5]',
                },
              },
              'postcss-loader',
            ],
          },
          {
            test: /\.css$/,
            include: `${__dirname}/src`,
            use: [
              styleOrExtractLoader,
              'css-customs-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              'postcss-loader',
            ],
          },
        ],
      },
      isProd
        ? {
            test: /\.html$/,
            include: `${__dirname}/src`,
            use: [
              {
                loader: 'prerender-loader',
                options: {
                  string: true,
                },
              },
            ],
          }
        : null,
    ].filter(Boolean),
  },
}
