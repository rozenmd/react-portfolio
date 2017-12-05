import webpack from 'webpack'
import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import HTMLWebpackTemplate from 'html-webpack-template'
import Visualizer from 'webpack-visualizer-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default env => {
  const plugins = [
    new HTMLWebpackPlugin({
      inject: false,
      title: 'maxrozen.com',
      template: HTMLWebpackTemplate,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=no',
        },
        { name: 'description', content: 'maxrozen.com' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
        env && env === 'production'
          ? JSON.stringify('production')
          : JSON.stringify('development'),
    }),
  ]

  if (env === 'production') {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new UglifyJsPlugin()
    )
  }

  plugins.push(new LodashModuleReplacementPlugin())

  return {
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: 'cheap-module-source-map',
    output: {
      filename: '[hash].js',
      path: path.join(__dirname, '..', 'build', 'client'),
      publicPath: '/',
    },
    resolve: {
      alias: {
        'react-dom': path.resolve(__dirname, '..', 'node_modules', 'react-dom'),
        react: path.resolve(__dirname, '..', 'node_modules', 'react'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, '..', 'node_modules', 'luxon'),
          ],
          loader: 'babel-loader',
        },
        {
          test: /(index\.css|fonts\.css|leaflet\.css|bootstrap\.css|react-select\.css|_datepicker\.css)/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, '..', 'node_modules', 'react-select'),
          ],
          loaders: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(?:png|jpg|svg|json|csv)/,
          include: [
            path.resolve(__dirname, 'data'),
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'images'),
          ],
          exclude: [path.resolve(__dirname, 'src/messages.json')],
          use: 'file-loader',
        },
        {
          test: /\.(?:ttf|svg|woff2?|eot)$/,
          loader: 'file-loader',
          include: [path.resolve(__dirname, 'fonts')],
        },
      ],
    },
    plugins,
  }
}
