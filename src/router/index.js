import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Search from '../pages/search/Search'
import Chat from '../pages/chat/Chat'
import Recommend from '../pages/recommend/Recommend'
import Me from '../pages/me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
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
