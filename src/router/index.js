import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '@/views/Signup.vue'
import Chatroom from '../views/ChatRoom.vue'
import { auth } from '@/firebase/config'

const routes = [
  {
    path: '/',
    alias: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if(!user){
        next()
      }else{
        next({name: 'chatroom'})
      }
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if(user){
        next()
      }else{
        next({name: 'login'})
      }
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
