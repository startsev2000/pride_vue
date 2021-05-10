import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import AddEmployee from '@/views/AddEmployee.vue'
import AddNews from '@/views/AddNews.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/addnews',
    name: 'Add news',
    component: AddNews
  },
  {
    path: '/addemployee',
    name: 'Add employee',
    component: AddEmployee
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router