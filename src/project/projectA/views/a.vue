<template>
  <div class="about">
    <h1>我是项目ProjectA</h1>
    <img src="@/assets/logo.png" alt />
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { activityList } from "@/api/common.js";
import { a } from "../api/a.js";
export default {
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  created() {
    activityList({}).then(res => {
      console.log(res);
    });
    a({}).then(res => {
      console.log(res);
    });
  }
};
</script>
