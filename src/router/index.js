import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Story from '../pages/Story.vue'
import Goods from '../pages/Goods.vue'
import Rank from '../pages/Rank.vue'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/story', component: Story },
  { path: '/goods', component: Goods },
  { path: '/rank', component: Rank },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router