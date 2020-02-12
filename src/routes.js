const firstPage = () => import('./components/Main.vue')
const cart = () => import('./components/CartPage.vue')
const goodPage = () => import('./components/GoodPage.vue')
const curclePage = () => import('./components/CurclePage.vue')
const page404 = () => import('./components/Page404.vue')

export default [
  {
    path: '/',
    component: firstPage
  },
  {
    path: 'curcle',
    component: curclePage
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/good/:title',
    component: goodPage
  },
  {
    path: '/*',
    component: page404
  }
]
