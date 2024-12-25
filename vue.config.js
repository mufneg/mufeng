const { defineConfig } = require("@vue/cli-service");
// vue.config.js
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", path.resolve(__dirname, "src/components"));
  },
  pages: {
    index: {
      entry: "src/main.js", // 入口文件
      title: "哈哈哈",
    },
  },
};
