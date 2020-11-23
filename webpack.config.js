const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 1347,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src/components/app/app.jsx'),
      '@main': path.resolve(__dirname, 'src/components/main/main.connect.js'),
      '@offer': path.resolve(__dirname, 'src/components/offer/offer.connect.js'),
      '@login': path.resolve(__dirname, 'src/components/login/login.connect.js'),
      '@favorites': path.resolve(__dirname, 'src/components/favorites/favorites.connect.js'),
      '@cards': path.resolve(__dirname, 'src/components/cards/cards.jsx'),
      '@card': path.resolve(__dirname, 'src/components/card/card.connect.js'),
      '@form': path.resolve(__dirname, 'src/components/form/form.connect.js'),
      '@cityMap': path.resolve(__dirname, 'src/components/city-map/city-map.connect.js'),
      '@cities': path.resolve(__dirname, 'src/components/cities/cities.connect.js'),
      '@emptyFavorites': path.resolve(__dirname, 'src/components/empty-favorites/empty-favorites.jsx'),
      '@emptyMain': path.resolve(__dirname, 'src/components/empty-main/empty-main.connect.js'),
      '@const': path.resolve(__dirname, 'src/const.js'),
      '@prop': path.resolve(__dirname, 'src/prop.js'),
      '@utils': path.resolve(__dirname, 'src/utils.js'),
      '@actions': path.resolve(__dirname, 'src/store/actions/'),
    }
  },
  devtool: 'source-map',
};
