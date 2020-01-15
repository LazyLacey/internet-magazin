const firstPage = () => import('./components/Main.vue')
const cart = () => import('./components/CartPage.vue')
const goodPage = () => import('./components/GoodPage.vue')

export default [
  {
    path: '/',
    component: firstPage
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/good/:title',
    component: goodPage
  }
]
