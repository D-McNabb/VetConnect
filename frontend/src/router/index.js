import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import BookAppointment from '../views/BookAppointment.vue';
import PetRecords from '../views/PetRecords.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/book', name: 'BookAppointment', component: BookAppointment },
  { path: '/records', name: 'PetRecords', component: PetRecords },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
