import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inscription from '../views/Inscription.vue'
import Connexion from '../views/Connexion.vue'
import Prix from '../views/Prix.vue'

import Dashboard from '@/components/Dashboard.vue';
import Graph from '@/components/Graph.vue';
import Avis from '@/components/Avis.vue';
import Avisdetails from '@/components/Avisdetails.vue';
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
    path: '/Avisdetails',
    name: 'Avisdetails',
    component: Avisdetails
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router