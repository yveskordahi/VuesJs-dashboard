import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inscription from '../views/Inscription.vue'
import Connexion from '../views/Connexion.vue'
import Prix from '../views/Prix.vue'

import Dashboard from '@/components/Dashboard.vue';
import Graph from '@/components/Graph.vue';
import Avis from '@/components/Avis.vue';
import Documentation from '@/components/Documentation.vue';
import UserID from '@/components/UserID.vue';
import Users from '@/components/Users.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/Prix',
    name: 'Prix',
    component: Prix
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Graph',
    name: 'Graph',
    component: Graph
  },
  {
    path: '/Avis',
    name: 'Avis',
    component: Avis
  },
  {
    path: '/Documentation',
    name: 'Documentation',
    component: Documentation
  },
  {
    path: '/UserID',
    name: 'UserID',
    component: UserID
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users
  }
//   {
//     path: '/Slider_battleww1',
//     name: 'Slider_battleww1',
//     component: Slider_battleww1
//   },
//   {
//     path: '/AgeSoldier',
//     name: 'AgeSoldier',
//     component: AgeSoldier
//   },
//   {
//     path: '/Consequenceww1',
//     name: 'Consequenceww1',
//     component: Consequenceww1
//   },
//   {
//     path: '/Slider_colonieSoldier',
//     name: 'Slider_colonieSoldier',
//     component: Slider_colonieSoldier
//   },
//   {
//     path: '/Summaryww2',
//     name: 'Summaryww2',
//     component: Summaryww2
//   },
//   {
//     path: '/MapWW2',
//     name: 'MapWW2',
//     component: MapWW2
//   },
//   {
//     path: '/Slider_battleww2',
//     name: 'Slider_battleww2',
//     component: Slider_battleww2
//   },
//   {
//     path: '/AgeSoldierww2',
//     name: 'AgeSoldierww2',
//     component: AgeSoldierww2
//   },
//   {
//     path: '/Consequenceww2',
//     name: 'Consequenceww2',
//     component: Consequenceww2
//   },
//   {
//     path: '/Slider_colonieSoldierww2',
//     name: 'Slider_colonieSoldierww2',
//     component: Slider_colonieSoldierww2
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router