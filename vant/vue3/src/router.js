import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'cwkj',
    },
  },
  {
    name: 'cwkj',
    path: '/cwkj',
    component: () => import('./view/cwkj/index'),
    meta: {
      title: 'demo',
    },

  },  {
    name: 'success',
    path: '/success',
    component: () => import('./view/success/success'),
    meta: {
      title: 'demo',
    },

  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
