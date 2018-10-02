<!--首页-->
<template>
  <div class="main">
  	<div id="banner"></div>
		<ul id="tab" style="border-top:0;font-size:18px">
        <li>最近更新</li>
        <li>主题系列</li>
        <li>随便刷刷</li>
        <li>五夜后宫</li>
        <li>更多 →</li>
    </ul>
    <div class="main-content">
    		<ul>
	      	<li v-for="(item,index) in imglist" :key='index' class="imglist">
	      		<img :src="item" alt="" width="300px"/>
	      		<div class="hidewrap">
	      			<p>序号：10000</p>
	      			<p>小小熊</p>
	      			<p>午夜后宫系列</p>
	      		</div>
	      	</li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      	<li class="dd"></li>
	      </ul>
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
        imgHeight: '',
        imglist:['https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg','https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg']
      }
    },
    updated() {

    },
    mounted() {
      var that = this;
    },
    methods: {
    },
  }
</script>
<style scoped lang="scss">
  .main {
    width: 100%;
    margin: 0 auto;
    background: #91C8DC;
    margin-top: 150px;
    #tab{
    	width: 100%;
    	text-align: center;
    	height:90px;
    	color:#fff;
    	li{
    		display: inline-block;
    		cursor: pointer;
    		margin-left: 20px;
    		margin-top: 30px;
    		padding-bottom: 10px;
    	}
    	li:hover{
    		border-bottom: 3px solid #FD9EB2;
    		color: #FD9EB2;
    	}
    }
    .main-content {
      width: 100%;
      background: #fff;
      	ul{
	      	width: 100%;
	      	display: flex;
	      	justify-content: center;
	      	align-content: center;
	      	flex-wrap: wrap;
	      	li{
	      		width: 300px;
	      		height: 300px;
	      		margin: 10px;
	      		position: relative;
	      		
	      		img{
	      			border: 1px solid #91C8DC;
	      			border-radius: 8px;
	      		}
	      	}
	      	.hidewrap{
	      		width: 300px;
	      		height: 300px;
	      		position: absolute;
	      		left: 0;
	      		top: 0;
	      		background: rgba(192, 204, 218, 0);
	      		transition: all 2s;
	      		padding-top: 30px;
	      		p{
	      			color: #f66;
	      			text-align: center;
	      			font-size: 20px;
	      			display: none;
	      			transition: all 2s;
	      			padding-bottom: 20px;
	      		}
	      	}
	      	.imglist:hover .hidewrap{
	      		background: rgba(192, 204, 218, 0.6);
	      	}
	      	.imglist:hover .hidewrap p{
	      		display: block;
	      	}
	      	.dd{
	      		width: 300px;
	      		height: 0;
	      		margin: 10px;
	      	}
	      }
    }
  }
</style>
