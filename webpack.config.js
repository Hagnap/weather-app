const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    //weatherAPI: './src/weatherAPI.js',
    //weatherObj: './src/weatherObj.js',
    //manipulateDOM: './src/manipulateDOM.js',
    //userData: './src/userData.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv()
  ],
};