const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    weatherAPI: './src/weatherAPI.js',
    manipulateDOM: './src/manipulateDOM.js',
    dateData: './src/getDateData.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {

    rules: [

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

    ],

  },
  plugins: [
    new Dotenv()
  ],
};