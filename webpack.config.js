const path = require('path');
module.exports = {
  mode: 'development',
  // defined above
 entry:{

    piglatin: './piglatin.ts'
},
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
