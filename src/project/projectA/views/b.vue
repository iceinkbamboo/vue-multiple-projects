<template>
  <div class="about">
    <h1>我是项目ProjectA b页面</h1>
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  name: "B",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.img {
  width: 200px;
  height: 200px;
  border: 1px solid #000000;
  background: url("../../../assets/logo.png") no-repeat;
  background-size: 100% auto;
  background-position: left center;
}
</style>
