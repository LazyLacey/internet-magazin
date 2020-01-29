import Vuex from 'vuex'
import Vue from 'vue'
import moreGoods from './components/goods'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goods: [],
    // visibleGoods: [],
    moreGoods: moreGoods,
    filterParam: 50,
    goodPage: {}
  },
  getters: {
    visibleGoods: state => {
      return state.goods.filter(good => good.price > state.filterParam)
    },
    cartGoods: state => {
      return state.goods.filter(good => good.inCart > 0)
    },
    cartNumber: (state, getters) => {
      return getters.cartGoods.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.inCart
      }, 0)
    },
    cartSum: (state, getters) => {
      return getters.cartGoods.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.count * Number(currentValue.price)
      }, 0)
    },
    isMoreGoods: state => {
      return state.moreGoods.length != state.goods.length
    }
  },
  // watch: {
  //   goods: (state, mutations) => {
  //     mutations.filterFunction(state.filterParam)
  //   }
  // },
  mutations: {
    moreElements (state, count) {
      for (let i = 0; i < count; i++) {
        if (state.moreGoods.length > state.goods.length) {
          console.log('больше, больше гламура')
          state.goods.push(state.moreGoods[state.goods.length])
        }
      }
    },
    chooseToCart (state, arg) {
      state.goods.forEach(good => {
        if (good.title === arg) {
          good.inCart = true
          if (good.count < 1) { good.count += 1 }
        }
      })
    },
    deleteFromCart (state, arg) {
      state.goods.forEach(good => {
        if (good.title === arg) {
          good.inCart = false
          good.count = 0
        }
      })
    },
    addToCart (state, arg) {
      state.goods.forEach(good => { if (good.title === arg) { good.count += 1 } })
    },
    removeFromCart (state, arg) {
      state.goods.forEach(good => { if (good.title === arg && good.count > 0) { good.count -= 1 } })
    },
    chooseAddToCart (state, payload) {
      if (payload.amount > 0) {
        state.goods.forEach(good => {
          if (good.title === payload.name) {
            good.inCart = true
            good.count += payload.amount
          }
        })
      }
    },
    // filterFunction (state, arg) {
    //   state.filterParam = arg
    //   state.visibleGoods = state.goods.filter(good => good.price > arg)
    // },
    getGood (state, arg) {
      console.log(state.moreGoods.find(good => good.title === arg))
      state.goodPage = state.moreGoods.find(good => good.title === arg)
    },
    changeFilterParam (state, value) {
      console.log(value)
      state.filterParam = value
    }
  }
})

export default store
