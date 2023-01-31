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
        component: () => import('pages/front/RegisterView.vue'),
        meta: {
          title: ' Dostoevsky | 註冊',
          login: false,
          admin: false
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

// const routes = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '', component: () => import('pages/front/HomeView.vue') },
//       {
//         path: 'home',
//         name: 'home',
//         component: () => import('pages/front/HomeView.vue'),
//         meta: {
//           title: ' Dostoevsky | 首頁',
//           login: false,
//           admin: false
//         }
//       },
//       {
//         path: 'intro',
//         name: 'intro',
//         component: () => import('pages/front/IntroView.vue'),
//         meta: {
//           title: ' Dostoevsky | 介紹頁',
//           login: false,
//           admin: false
//         }
//       },
//       {
//         path: 'reading',
//         name: 'reading',
//         component: () => import('pages/front/ReadingView.vue'),
//         meta: {
//           title: ' Dostoevsky | 閱讀',
//           login: false,
//           admin: false
//         }
//       },
//       {
//         path: 'news',
//         name: 'news',
//         component: () => import('pages/front/NewsView.vue'),
//         meta: {
//           title: ' Dostoevsky | 新訊息',
//           login: false,
//           admin: false
//         }
//       },
//       {
//         path: 'products',
//         name: 'products',
//         component: () => import('pages/front/ProductsView.vue'),
//         meta: {
//           title: ' Dostoevsky | 首頁',
//           login: false,
//           admin: false
//         }
//       },
//       {
//         path: 'register',
//         name: 'register',
//         component: () => import('pages/front/RegisterView.vue'),
//         meta: {
//           title: ' Dostoevsky | 首頁',
//           login: false,
//           admin: false
//         }
//       }
//     ]
//   },
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue')
//   }
// ]

// export default routes
