<!--首页-->
<template>
  <div class="main">
    <h2></h2>
		<h6></h6>
		<nav id="nav">
			<ul>
				<router-link to='/home' tag='li'>玩偶说</router-link>
				<li>学姐之家</li>
				<li>足球先生</li>
			</ul>
		</nav>
		<p>
			<img src="../../static/imgs/bottom.png" alt="" />
			<img src="../../static/imgs/subbottom.png" alt="" />
		</p>
		<div class="box">
			<div style="transform: rotateY(0deg) translateZ(275px);">
				<img src="../../static/imgs/1.png" >
			</div>
			<div style="transform: rotateY(40deg) translateZ(275px);">
				<img src="../../static/imgs/2.png">
			</div>
			<div style="transform: rotateY(80deg) translateZ(275px);">
				<img src="../../static/imgs/3.png">
			</div>
			<div style="transform: rotateY(120deg) translateZ(275px);">
				<img src="../../static/imgs/4.png">
			</div>
			<div style="transform: rotateY(160deg) translateZ(275px);">
				<img src="../../static/imgs/5.png">
			</div>
			<div style="transform: rotateY(200deg) translateZ(275px);">
				<img src="../../static/imgs/6.png">
			</div>
			<div style="transform: rotateY(240deg) translateZ(275px);">
				<img src="../../static/imgs/7.png">
			</div>
			<div style="transform: rotateY(280deg) translateZ(275px);">
				<img src="../../static/imgs/8.png">
			</div>
			<div style="transform: rotateY(320deg) translateZ(275px);">
				<img src="../../static/imgs/9.png" >
			</div>					
		</div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import $ from "jquery"
  import MyFn from "@/function/MyFn.js"
  import MyAjax from "@/function/MyAjax.js"
  export default {
    name: 'register',
    data() {
      return {
        imglist: [],
        imgHeight: ''
      }
    },
    updated() {

    },
    mounted() {
      var that = this;
      that.imgHeight = $('.main').width() * 920 / 1920 - 30 + 'px';
      that.setOnresize = window.onresize = function temp() {
        that.imgHeight = `${that.$refs.imgHeight['0'].height}px`
      };
      for (var i = 0; i < $(".img-wrap").length; i++) {
        $($(".img-wrap")[i]).hover(function () {
          $(this).find($(".tip-hide")).slideDown();
        }, function () {
          $(this).find($(".tip-hide")).slideUp();
        });
      }
      for (var i = 0; i < $(".server-head").length; i++) {
        $($(".server-head")[i]).hover(function () {
          $(this).find($(".div-bottom-hide")).animate({'margin-top': "5px"}, 300, 'linear');

          $(this).find($(".div-tittle")).animate({'margin-top': "130px"}, 500, 'linear');
        }, function () {
          $(this).find($(".div-bottom-hide")).animate({'margin-top': "200px"});
          $(this).find($(".div-tittle")).animate({'margin-top': "168px"}, 500, 'linear');
        });
      }
      that.setOnscroll = window.onscroll = function () {
        if ($('body').scrollTop() >= 1550) {
          $('.scroll-top').fadeIn();
        } else {
          $('.scroll-top').fadeOut();
        }
      };
      //回到顶部
      $('.scroll-top').click(function () {
        $('body').animate({scrollTop: '0px'}, 800)
      })
    },
    methods: {
      //banner图点击跳转到不同页面
      bannerImg(index) {
        console.log(index)
      },
    },
    destroyed() {
      // destroyed 销毁完成
      window.onresize = null;
      window.onscroll = null;
    }
  }
</script>
<style scoped lang="scss">
  @import "./../scss/index.scss";
</style>
