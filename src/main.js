import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Home from './views/Home.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
// new Vue({
//   el: '#Home',
//   components: { Home },
//   template: '<Home/>'
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')