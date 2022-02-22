import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
