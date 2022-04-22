module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  resolve: {
    root: __dirname,
    alias: {
      Greeter: "app/components/Greeter.jsx",
      GreeterMessage: "app/components/GreeterMessage.jsx",
      GreeterForm: "app/components/GreeterForm.jsx",
    },
    extensions: ["", ".js", ".jsx", "scss", "css"],
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|.vscode)/,
      },
    ],
  },
};
