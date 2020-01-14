const firstPage = () => import('./components/Main.vue')
const cart = () => import('./components/CartPage.vue')

export default [
  {
    path: '/',
    component: firstPage
  },
  {
    path: '/cart',
    component: cart
  }
]
