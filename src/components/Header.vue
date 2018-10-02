<template>
  <div id="header-wrap">
    <div id="main-header" style="height:150px;">
      <div id="header-nav">
        <div id="nav-left">
          <img src="../../static/imgs/logo1.png" alt=""/>
        </div>
        <div id="nav-center" class="f-nav">
          <ul>
            <router-link to="/home" tag="li"><span class="iconfont icon-shouye"></span>Home</router-link>
            <router-link to="/home" tag="li"><span class="iconfont icon-iconset0168"></span>玩偶系列</router-link>
            <router-link to="/home" tag="li"><span class="iconfont icon-fenlei"></span>玩偶分类</router-link>
            <router-link to="/home" tag="li"><span class="iconfont icon-elfstorychris"></span>玩偶故事</router-link>
            <router-link to="/home" tag="li"><span class="iconfont icon-hezuo-"></span>凸能三兄弟</router-link>
            <router-link to="/home" tag="li"><span class="iconfont icon-wanzijiazu"></span>凸能家族</router-link>
          </ul>
        </div>
        <div class="iconfont icon-wanou"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "AppHeader",
    data() {
      return {
        islogin: true,
        unlogin: false,
      }
    }
  }
</script>

<style scoped>
.iconfont{
	margin-right: 10px;
	font-size: 20px;
}
.icon-wanou{
	margin-top: 35px;
}
</style>
