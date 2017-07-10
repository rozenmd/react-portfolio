const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const jsEntry = ['./app-client.js', 'components/home'];
const sourcePath = path.join(__dirname);

const extractCSS = new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true });

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.bundle.js'
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  })
];

if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      }, extractCSS
    })
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  );
}

module.exports = {
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    context: sourcePath,
    entry: {
      js: jsEntry,
      vendor: [
        'react',
        'react-dom'
      ]
    },

    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']}),
            exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: isProd ?
            extractCSS.extract({
              fallbackLoader: 'style-loader',
              loader: ['css-loader', 'sass-loader'],
          }) :
      ['style-loader', 'css-loader', 'sass-loader']
    }]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        __dirname,
        'node_modules'
      ]
    },
    plugins: plugins,
    devServer: {
      historyApiFallback: true
    }
};
