import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '@/views/Signup.vue'
import Chatroom from '../views/ChatRoom.vue'

const routes = [
  {
    path: '/',
    alias: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
