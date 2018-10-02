<!--首页-->
<template>
  <div class="main">
  	
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
	      		img{
	      			border: 1px solid #91C8DC;
	      			border-radius: 8px;
	      		}
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
