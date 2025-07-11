import { createRouter, createWebHistory } from 'vue-router';
// import { useAuthStore } from '../stores/auth'; // Ya no es necesario si omites auth
import forumRoutes from '../forum/router/index.js';

const HomeComponent = () => import('../public/pages/home.component.vue');
const AboutComponent = () => import('../public/pages/about.component.vue');
const PageNotFoundComponent = () => import('../public/pages/page-not-found.component.vue');
const CategoryManagementComponent = () => import('../publishing/pages/category-management.component.vue');
const LoginComponent = () => import('../auth/pages/login.component.vue');
const RegisterComponent = () => import('../auth/pages/register.component.vue');
const DashboardComponent = () => import('../pages/dashboard.component.vue');

const EventsComponent = () => import('../pages/events.component.vue');
const PollsComponent = () => import('../pages/polls.component.vue');
const ProfileComponent = () => import('../pages/profile.component.vue');
const SettingsComponent = () => import('../pages/settings.component.vue');
const AdminComponent = () => import('../pages/admin.component.vue');

const routes = [
  ...forumRoutes,
  {
    path: '/',
    name: 'default',
    redirect: '/login'
  },
  { path: '/login', name: 'login', component: LoginComponent, meta: { title: 'Iniciar sesión', guest: true } },
  { path: '/register', name: 'register', component: RegisterComponent, meta: { title: 'Registro', guest: true } },
  { path: '/dashboard', name: 'dashboard', component: DashboardComponent, meta: { title: 'Dashboard', requiresAuth: true } },
  { path: '/events', name: 'events', component: EventsComponent, meta: { title: 'Events', requiresAuth: true } },
  { path: '/polls', name: 'polls', component: PollsComponent, meta: { title: 'Polls', requiresAuth: true } },
  { path: '/profile', name: 'profile', component: ProfileComponent, meta: { title: 'Profile', requiresAuth: true } },
  { path: '/settings', name: 'settings', component: SettingsComponent, meta: { title: 'Settings', requiresAuth: true } },
  { path: '/admin', name: 'admin', component: AdminComponent, meta: { title: 'Administration', requiresAuth: true, adminOnly: true } },
  { path: '/home', name: 'home', component: HomeComponent, meta: { title: 'Home', requiresAuth: true } },
  { path: '/about', name: 'about', component: AboutComponent, meta: { title: 'About us', requiresAuth: true } },
  { path: '/publishing/categories', name: 'categories', component: CategoryManagementComponent, meta: { title: 'Category management', requiresAuth: true } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFoundComponent, meta: { title: 'Page not found' } }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// 🔓 Middleware sin autenticación (modo libre para desarrollo)
router.beforeEach((to, from, next) => {
  console.log(`(DEV) Navegación libre: ${from.path} → ${to.path}`);

  const baseTitle = 'VeciHub';
  if (to.meta && to.meta.title) {
    document.title = `${baseTitle} | ${to.meta.title}`;
  } else {
    document.title = baseTitle;
  }

  next(); // siempre permite el acceso
});

export default router;
