const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true, 
    port: 9000, 
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], 
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], 
  },
};
