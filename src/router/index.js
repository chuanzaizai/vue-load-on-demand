import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';

// 组件
const Goods = resolve => require(['./../components/Goods/Goods.vue'], resolve);
const Ratings = resolve => require(['./../components/Ratings/Ratings.vue'], resolve);
const Seller = resolve => require(['./../components/Seller/Seller.vue'], resolve);

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ],
  linkActiveClass: 'active'
});

