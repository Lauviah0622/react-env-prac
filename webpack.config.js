const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 入口點
  output: {
    path: path.join(__dirname, "/dist"), // 輸出的位置
    filename: "bundle.[hash].js", // 使用 [hash] 避免瀏覽器 cache
  },
  module: {
    // 使用模組
    rules: [
      //設定不同條件使用不同的 module
      {
        test: /\.js$/, // 什麼樣的檔名要用這個 module
        exclude: /node-modules/, // 除了什麼之外
        use: {
          loader: "babel-loader", //
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 可以依照模板輸出 html，在的這邊用來會依照入口點的檔案名稱，在 html 放入 script 標籤
      template: "./index.html",
    }),
  ],
  devServer: { // webpack cli 升級到 4.0.0 ^ 之後，webpack-dev-server 就部管用了，不過 webpack 也可以自己處理 devserver 的事情，下面是建議的設定
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    hot: true,
    index: 'index.html',
    open: true
  },
};
