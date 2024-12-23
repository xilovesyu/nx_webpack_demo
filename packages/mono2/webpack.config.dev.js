const webpack = require('webpack')
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
//analyzer
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = (env, args) => {
  const analyzerMode = process.env.ANALYZE_BUNDLE === 'true'
  const port = process.env.PORT || 3001

  return merge(baseConfig(env, args), {
    plugins: [
      new webpack.HotModuleReplacementPlugin(), //hot update plugin
      analyzerMode && new BundleAnalyzerPlugin()
    ].filter(Boolean),
    devServer: {
      client: {
        progress: true
      },
      port: port,
      hot: true,
      host: '0.0.0.0',
      historyApiFallback: true
      //stats: 'errors-only' //only prints error in console
      //overlay: false, //full screen error display? default is false
      //clientLogLevel: "silent", //silent meaning no 'Waiting for update signal from WDS...' and other.
      //compress: true //use gzip? default is false.
    }
  })
}
