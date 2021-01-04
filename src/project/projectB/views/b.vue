<template>
  <div class="about">
    <div class="about-box">移动端设配</div>
    <h1>我是项目ProjectB</h1>
    <HelloWorld></HelloWorld>
    <input type="text" :value="inputValue" @input="inputChange" />
    <div class="about-btn" @click="getVal">获取Input</div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    // 输入框字符长度限制 最多32个字节
    inputChange(e) {
      let str = e.target.value;
      let bytesCount = 0;
      let index = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (/^[\u4e00-\u9fa5]$/.test(c)) {
          bytesCount += 2;
        } else {
          bytesCount += 1;
        }
        if (bytesCount === 32) {
          index = i;
          break;
        }
      }
      if (index !== 0) {
        str = str.slice(0, i + 1);
        e.target.value = str;
        this.inputValue = str;
      } else {
        e.target.value = str;
        this.inputValue = str;
      }
    },
    getVal() {
      console.log(this.inputValue);
    }
  }
};
</script>

<style lang="less" scoped>
.about {
  width: 100%;
  height: 100%;

  &-box {
    width: 750px;
    height: 200px;
    background: blue;
    color: #ffffff;
    text-align: center;
    line-height: 200px;
    font-size: 60px;
  }

  &-btn {
    width: 200px;
    height: 80px;
    line-height: 80px;
    background: #ff6600;
    margin: 0 auto;
    margin-top: 40px;
  }
}
</style>
