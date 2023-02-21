import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'
import about from '@/pages/about'
import article from '@/pages/article'
import archive from '@/pages/archive'
import apply from '@/pages/apply'
// import admin from '@/views/admin'
import index from '@/pages/index'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/home',
    name: 'home',
    component: index
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/archive',
    name: 'archive',
    component: archive
  },
  {
    path: '/tag/:name',
    name: 'tag',
    component: archive
  },
  {
    path: '/article/:id',
    name: 'article',
    meta: { title: '文章详情' },
    props: true,
    component: article
  },
  {
    path: '/apply',
    name: 'apply',
    component: apply
  },
  {
    path: '/admin/',
    name: 'admin',
    component: () => import('@/views/admin')
  },
  {
    path: '/admin/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/admin/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/admin/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/admin/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/admin/',
    component: () => import('@/views/dashboard/index'),
    redirect: '/dashboard'
    // children: [
    //   {
    //     path: 'dashboard',
    //     component: () => import('@/views/dashboard/index'),
    //     name: 'Dashboard',
    //     meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
    //   }
    // ]
  },
  {
    path: '/admin/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/admin/profile',
    component: Layout,
    redirect: '/admin/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/admin/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },
  {
    path: '/admin/article',
    component: Layout,
    children: [
      {
        path: 'list',
        component: () => import('@/views/article/list'),
        name: 'list',
        meta: { title: 'article', icon: 'el-icon-s-help', noCache: true }
      }
    ]
  },
  {
    path: '/admin/articles',
    component: Layout,
    children: [
      {
        path: 'create',
        component: () => import('@/views/article/create'),
        name: 'create'
        // meta: { title: 'create', icon: 'el-icon-s-help', noCache: true }
      }
    ]
  },
  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/admin/example',
    component: Layout,
    redirect: '/admin/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: '/admin/edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: '/admin/list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  },

  {
    path: '/admin/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab' }
      }
    ]
  },

  {
    path: '/admin/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'Theme', icon: 'theme' }
      }
    ]
  },

  {
    path: '/admin/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'Clipboard', icon: 'clipboard' }
      }
    ]
  },

  {
    path: '/admin/external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title ? to.meta.title : '加载中'
  }
  next()
  const userToken = window.sessionStorage.getItem('token')
  if (to.path === '/admin/login') return next()
  if (!userToken && to.path.startsWith('/admin')) {
    next('/admin/login')
  } else {
    next()
  }
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
