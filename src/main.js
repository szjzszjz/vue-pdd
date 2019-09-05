// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AlertView from './common/alert/index'
import NotificationBar from './common/notification/index'
import ShowFade from './common/fade/index'

Vue.use(AlertView)
Vue.use(NotificationBar)
Vue.use(ShowFade)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
