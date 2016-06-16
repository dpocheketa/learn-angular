module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",
  output: {
      path: __dirname + "/build",
      filename: "bundle.js"
  },
  resolve: {
    modulesDirectories: ['node_modules', './']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      },
      {
          test: /\.html$/,
          // loader: "raw",
          loader: "angular-templatecache-loader",
          exclude: /node_modules|bower_components/
      }
    ]
  }
};
