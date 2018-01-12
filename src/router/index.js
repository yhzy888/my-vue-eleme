import Vue from 'vue';
import Router from 'vue-router';
import Resource from "vue-resource";
import Header from "@/components/header/Header";
import Goods from "@/components/Goods/Goods";
import Seller from "@/components/Seller/Seller";
import Ratings from "@/components/Ratings/Ratings";

//定义路由插件
Vue.use(Router)
//定义ajax获取数据的插件resource
Vue.use(Resource)

//定义每个路由对应的一个组件
export default new Router({
	linkActiveClass:"active",
    routes: [
    {
      path : '/',
      redirect : "/Goods",
      name: 'Goods',
      component : Goods
    },
    {
    	path : "/Goods",
    	name : 'Goods',
      component : Goods
    },
    {
    	path : "/Header",
    	name : "Header",
    	component : Header
    },
    {
    	path : "/Seller",
    	name : "Seller",
    	component : Seller
    },
    {
    	path : "/Ratings",
    	name : "Ratings",
    	component : Ratings
    }
    
  ]
})
