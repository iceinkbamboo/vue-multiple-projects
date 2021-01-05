<template>
  <div class="about">
    <h1>demo</h1>
    <img src="@/assets/logo.png" alt />
    <HelloWorld></HelloWorld>
    <button @click="jump">b页面</button>
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
  },
  methods: {
    jump() {
      this.$router.push({ name: "B" });
    }
  }
};
</script>
