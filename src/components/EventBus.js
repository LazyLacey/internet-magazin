import Vue from 'vue'
import moreGoods from './goods'

export const EventBus = new Vue({
  data () {
    return {
      // from main
      text: 'Hello, world!',
      firstName: 'I',
      lastName: 'Am',
      randColor: '',
      goods: [],
      visibleGoods: [],
      moreGoods: moreGoods,
      filterParam: 50
    }
  },
  computed: {
    // from main
    cartGoods () {
      return this.goods.filter(good => good.inCart > 0)
    },
    cartNumber () {
      return this.cartGoods.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.inCart
      }, 0)
    },
    cartSum () {
      return this.cartGoods.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.count * Number(currentValue.price)
      }, 0)
    },
    isMoreGoods () {
      return this.moreGoods.length != this.goods.length
    }
  },
  watch: {
    // from main
    goods: function (newGoods) {
      this.filterFunction(this.filterParam)
    }
  },
  methods: {
    // from main
    moreElements: function (count) {
      for (let i = 0; i < count; i++) {
        if (moreGoods.length > this.goods.length) {
          console.log('больше, больше гламура')
          this.goods.push(moreGoods[this.goods.length])
        }
      }
    },
    chooseToCart (arg) {
      this.goods.forEach(good => {
        if (good.title === arg) {
          good.inCart = true
          if (good.count < 1) { good.count += 1 }
        }
      })
    },
    deleteFromCart (arg) {
      this.goods.forEach(good => {
        if (good.title === arg) {
          good.inCart = false
          good.count = 0
        }
      })
    },
    addToCart (arg) {
      this.goods.forEach(good => { if (good.title === arg) { good.count += 1 } })
    },
    removeFromCart (arg) {
      this.goods.forEach(good => { if (good.title === arg && good.count > 0) { good.count -= 1 } })
    },
    filterFunction (arg) {
      this.filterParam = arg
      this.visibleGoods = this.goods.filter(good => good.price > arg)
    },
    // from cart
    minusGood: function (good) {
      EventBus.$emit('minusGood', good.title)
      console.log('emitted')
    },
    plusGood: function (good) {
      EventBus.$emit('plusGood', good.title)
    },
    deleteGood: function (good) {
      EventBus.$emit('deleteGood', good.title)
    }
  }
})
