import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'Home',
      components : HomePage
    } 
  ]
})

export default router
