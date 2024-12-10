const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPluginConfigs = require('./htmlWebpackPluginConfig.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin') //removed unused moment locales
const webpack = require('webpack')
require('dotenv').config({ debug: true })

//env, webpack env for example, webpack --env entry='./app.js'
module.exports = (env, args) => {
  const mode =
    process.env.NODE_ENV === 'development' ? 'development' : 'production'
  const isProduction = mode === 'production'
  const useEsBuild = process.env.ES_BUILD === 'true' ?? false

  console.log('current mode: ', mode, 'use es build?: ', useEsBuild)
  return {
    mode: mode,
    devtool: isProduction ? false : 'source-map',
    entry: ['./src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'build'), //must be absolute path,
      filename: 'index.bundle.[contenthash:6].js'
    },
    externals: {
      // 不在使用externals
      //react: 'React', //for import react from html with cdn
      //'react-dom': 'ReactDOM',
      //'react-dom/client': 'ReactDOMClient'
    },
    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.web.js',
        '.js',
        '.json',
        '.css',
        '.png',
        '.gif',
        '.svg'
      ]
    },
    module: {
      rules: [
        !useEsBuild && {
          test: /\.[jt]s[x]?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                //extra options
              }
            }
          ]
        },
        useEsBuild && {
          test: /\.[jt]s[x]?$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx', // Remove this if you're not using JSX
            target: 'es2015', // Syntax to compile to (see options below for possible values)
            jsx: 'automatic'
          }
        },
        {
          test: /\.less/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('autoprefixer')]
                }
              }
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true
                }
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(jpg|png|gif|webp|svg|eot|ttf|woff|woff2)/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[name]-[contenthash:5].[ext]',
                limit: 1024,
                esModule: false,
                outputPath: 'assets'
              }
            }
          ],
          exclude: /node_modules/
        }
      ].filter(Boolean)
    },
    plugins: [
      new NodePolyfillPlugin(),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        config:
          htmlWebpackPluginConfigs[isProduction ? 'production' : 'development']
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'fr', 'zh-cn']
      })
    ]
  }
}
