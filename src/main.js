import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
// import Home from './views/Home.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

router.beforeEach((to, from, next) => {
  window.console.log(router.app.$store.state.is_connect)
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    (!router.app.$store.state.is_connect)
  ) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    window.console.log('Non authentifié')
    next({
      path: '/Connexion',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

sync(store, router)

if (window.localStorage) {
  var localConnect = window.localStorage.getItem("is_connect") || false
  if (localConnect) {
    store.commit("SET_IS_CONNECT", localConnect)
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')