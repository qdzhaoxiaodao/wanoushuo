import Vue from 'vue'
import Router from 'vue-router'
import common from '@/components/Common'//公共部分

//--zhh--//
import home from '@/pages/home/Home'//首页
import index from '@/pages/index'//首页
import classification from '@/pages/classification/classification'//首页

import header from "@/components/Header"   //头部 公共组件
import footer from "@/components/Footer"   //头部 公共组件
Vue.use(Router);

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},
    {
      path: '/common',
      name: 'common',
      component: common,
      children: [
        {path: "/home", name: "home", components: {header: header, main: home,footer:footer}},
        {path: "/classification", name: "classification", components: {header: header, main: classification,footer:footer}},
      ],
    },
  ]
})
