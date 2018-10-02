<!---->
<template>
  <div id="main-comtent">
    <div style="width: 100%;height: 150px;">
      <!--头部区域-->
        <router-view name="header"></router-view>
      <!--主体区域-->
      <div id="main-content">
        <router-view name="main"></router-view>
      </div>
      <!--底部区域-->
        <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
  import MyAjax from "@/function/MyAjax.js";
  import MyFn from "@/function/MyFn.js";

  export default {
    name: "common",
    data() {
      return {};
    },
    mounted() {

    },
    methods: {},
    components: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #main-header {
    z-index: 9999;
  }

  #main-content {
    background: #fff;
  }
</style>
