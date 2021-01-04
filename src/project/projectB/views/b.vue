<template>
  <div class="about">
    <div class="about-box">移动端设配</div>
    <h1>我是项目ProjectB</h1>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  },
  data() {
    return {};
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
}
</style>
