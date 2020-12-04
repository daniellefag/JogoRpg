const { devServer } = require("./webpack.config")

module.exports {
  devServer: {
      proxy: 'http://localhost:8080/'
  }
};