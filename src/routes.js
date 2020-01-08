const firstPage = () => import('./components/Main.vue')
const cart = () => import('./components/Lol.vue')

export default [
  {
    path: '/',
    component: firstPage
  },
  {
    path: '/kek',
    component: cart
  }
]
