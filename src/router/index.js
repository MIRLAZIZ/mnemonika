import { createRouter, createWebHistory } from 'vue-router'
import Settings from '../views/Settings.vue'
import TableItem from '../views/TableItem.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Manual from '../views/Manual.vue'
import Dobavit from '../views/Dobavit.vue'
import UpdateTable from '../views/UpdateTable.vue'

const routes = [
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/',
    name: 'TableItem',
    component: TableItem
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/manual',
    name: 'Manual',
    component: Manual
  },
  {
    path: '/dobavit',
    name: 'Dobavit',
    component: Dobavit
  },
  {
    path: '/tableItem/:id',
    name: 'UpdateTable',
    component: UpdateTable
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
