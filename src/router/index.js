import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Infoprofile from '../views/Infoprofile.vue'
import Connexion from '../views/Connexion.vue'
import Addprofile from '../views/Addprofile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Infoprofile',
    name: 'Infoprofile',
    component: Infoprofile
  },
  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/Addprofile',
    name: 'Addprofile',
    component: Addprofile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router