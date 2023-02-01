// import { createRouter, createWebHashHistory } from 'vue-router'
// import FrontLayout from 'layouts/MainLayout.vue'
// import FrontHomeView from 'pages/front/HomeView.vue'
// import NotFoundView from 'pages/ErrorNotFound.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/front/HomeView.vue') },
      {
        path: 'home',
        name: 'home',
        component: () => import('pages/front/HomeView.vue'),
        meta: {
          title: ' Dostoevsky | 首頁',
          login: false,
          admin: false
        }
      },
      {
        path: 'intro',
        name: 'intro',
        component: () => import('pages/front/IntroView.vue'),
        meta: {
          title: ' Dostoevsky | 介紹頁',
          login: false,
          admin: false
        }
      },
      {
        path: 'reading',
        name: 'reading',
        component: () => import('pages/front/ReadingView.vue'),
        meta: {
          title: ' Dostoevsky | 閱讀',
          login: false,
          admin: false
        }
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('pages/front/NewsView.vue'),
        meta: {
          title: ' Dostoevsky | 新訊息',
          login: false,
          admin: false
        }
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('pages/front/ProductsView.vue'),
        meta: {
          title: ' Dostoevsky | 商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('pages/front/OrdersView.vue'),
        meta: {
          title: ' Dostoevsky | 訂單',
          login: true,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('pages/front/RegisterView.vue'),
        meta: {
          title: ' Dostoevsky | 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/front/LoginView.vue'),
        meta: {
          title: ' Dostoevsky | 註冊',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('@/pages/admin/HomeView.vue'),
        meta: {
          title: '購物網 | 管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'admin-products',
        component: () => import('@/pages/admin/ProductsView.vue'),
        meta: {
          title: '購物網 | 商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'news',
        name: 'admin-news',
        component: () => import('@/pages/admin/NewsView.vue'),
        meta: {
          title: '購物網 | 文章管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: () => import('@/pages/admin/OrdersView.vue'),
        meta: {
          title: '購物網 | 訂單管理',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
