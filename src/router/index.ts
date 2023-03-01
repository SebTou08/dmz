import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from "@/views/Dashboard.vue";
import DashboardUsed from "@/views/DashboardUsed.vue";
import DashboardSoon from "@/views/DashboardSoon.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/used',
      name: 'used',
      component: DashboardUsed
    },
    {
      path: '/soon',
      name: 'soon',
      component: DashboardSoon
    }
  ]
})

export default router
