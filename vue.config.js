var projectname = process.argv[3];
var glob = require("glob");

function getEntry() {
  var entries = {};
  if (process.env.NODE_ENV == "production" && projectname) {
    entries = {
      index: {
        // page的入口
        entry: "src/project/" + projectname + "/main.js",
        // 模板来源
        template: "public/index.html",
        // 在 dist/index.html 的输出
        filename: "index.html",
        title: projectname,
        chunks: ["chunk-vendors", "chunk-common", "index"]
      }
    };
  } else {
    var items = glob.sync("./src/project/*/*.js");
    for (var i in items) {
      var filepath = items[i];
      var fileList = filepath.split("/");
      var fileName = fileList[fileList.length - 2];
      entries[fileName] = {
        entry: `src/project/${fileName}/main.js`,
        // 模板来源
        template: `public/index.html`,
        // 在 dist/index.html 的输出
        filename: `${fileName}.html`,
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ["chunk-vendors", "chunk-common", fileName]
      };
    }
  }
  return entries;
}

var pages = getEntry();
module.exports = {
  publicPath: "./",
  productionSourceMap: false, // 生产禁止显示源代码
  outputDir: projectname ? "dist/" + projectname : "dist",
  pages: pages
};
