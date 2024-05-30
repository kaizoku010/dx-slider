const path = require('path');

module.exports = {
    mode: 'production', // Set the mode to 'production', 'development', or 'none'
  entry: './src/Slider.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'dx-slider',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
};
