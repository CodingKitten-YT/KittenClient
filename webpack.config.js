const path = require('path');
const package = require('./package.json')

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/Main.js", // Changed this from ts to js because I hate typescript (aka. I do not want to learn it)
  },
  output: {
    path: path.resolve(__dirname, './out'),
    filename: package.name + ".js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/inline'
      },
      { test: /\.css$/, use: 'css-loader' }
        
    ]
  }
};