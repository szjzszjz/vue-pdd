import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import Home from '../pages/home/Home'
import Search from '../pages/search/Search'
import Chat from '../pages/chat/Chat'
import Recommend from '../pages/recommend/Recommend'
import Me from '../pages/me/Me'

// 二级路由
import Dress from '../pages/home/children/Dress'
import Ele from '../pages/home/children/Ele'
import Food from '../pages/home/children/Food'
import General from '../pages/home/children/General'
import Hot from '../pages/home/children/hot/Hot'
import Man from '../pages/home/children/Man'
import Mbaby from '../pages/home/children/Mbaby'
import Shirt from '../pages/home/children/Shirt'
import Box from '../pages/home/children/Box'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {path: 'hot', name: 'Hot', component: Hot},
        {path: 'dress', name: 'Dress', component: Dress},
        {path: 'box', name: 'Box', component: Box},
        {path: 'mbaby', name: 'Mbaby', component: Mbaby},
        {path: 'general', name: 'General', component: General},
        {path: 'food', name: 'Food', component: Food},
        {path: 'shirt', name: 'Shirt', component: Shirt},
        {path: 'man', name: 'Man', component: Man},
        {path: 'ele', name: 'Ele', component: Ele},
        {path: '/', redirect: 'hot'}
      ]
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    }, {
      path: '/me',
      name: 'Me',
      component: Me
    }, {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }, {
      path: '/',
      redirect: '/home'
    }
  ],
  mode: 'history'
})
