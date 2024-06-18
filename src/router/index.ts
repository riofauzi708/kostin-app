import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/index.vue';
import About from '../pages/About/index.vue';
import Contact from '../pages/Contact/index.vue';
import Login from '../pages/Auth/Login.vue';
import Register from '../pages/Auth/Register.vue';
import KosDetail from '../pages/KosDetail/index.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/kos-detail/:id', component: KosDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
