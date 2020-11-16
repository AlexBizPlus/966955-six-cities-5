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
      app: path.resolve(__dirname, 'src/components/app/app.jsx'),
      main: path.resolve(__dirname, 'src/components/main/main.jsx'),
      login: path.resolve(__dirname, 'src/components/login/login.jsx'),
      favorites: path.resolve(__dirname, 'src/components/favorites/favorites.jsx'),
      offer: path.resolve(__dirname, 'src/components/offer/offer.jsx'),
      cards: path.resolve(__dirname, 'src/components/cards/cards.jsx'),
      card: path.resolve(__dirname, 'src/components/card/card.jsx'),
      form: path.resolve(__dirname, 'src/components/form/form.jsx'),
      cityMap: path.resolve(__dirname, 'src/components/city-map/city-map.jsx'),
      cities: path.resolve(__dirname, 'src/components/cities/cities.jsx'),
      emptyFavorites: path.resolve(__dirname, 'src/components/empty-favorites/empty-favorites.jsx'),
      emptyMain: path.resolve(__dirname, 'src/components/empty-main/empty-main.jsx'),
      const: path.resolve(__dirname, 'src/const.js'),
      prop: path.resolve(__dirname, 'src/prop.js'),
      utils: path.resolve(__dirname, 'src/utils.js'),
      userActions: path.resolve(__dirname, 'src/store/actions/user-actions.js'),
      mapActions: path.resolve(__dirname, 'src/store/actions/map-actions.js'),
      hotelActions: path.resolve(__dirname, 'src/store/actions/hotel-actions.js'),
      cityActions: path.resolve(__dirname, 'src/store/actions/city-actions.js'),
      reviewsActions: path.resolve(__dirname, 'src/store/actions/reviews-actions.js'),
    }
  },
  devtool: 'source-map',
};
