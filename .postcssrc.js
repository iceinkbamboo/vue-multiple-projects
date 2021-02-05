// 移动端适配
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 75, // 75表示750设计稿，37.5表示375设计稿
      propList: ["*"],
      selectorBlackList: ["van"], // vant设计稿时375 当使用750设计稿时，需要屏蔽对vant样式修改
      exclude: /[a.vue | b.vue]/i // 使用正则表达式忽略 a.vue和b.vue下所有文件
    }
  }
};
