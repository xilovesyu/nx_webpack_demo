const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin //analyzer
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

module.exports = (env, args) => {
  const bundleAnalyzer = process.env.BUNDLE_ANALYZE ?? false
  const speedAnalyzer = process.env.SPEED_MEASURE ?? false

  return merge(baseConfig(env, args), {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserJSPlugin({
          parallel: true
        }),
        new CssMinimizerPlugin()
      ]
    },
    plugins: [
      bundleAnalyzer && new BundleAnalyzerPlugin(),
      speedAnalyzer && new SpeedMeasurePlugin()
    ].filter(Boolean)
  })
}
