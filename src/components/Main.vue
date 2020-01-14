<template>
  <div class="main">
    <div class="info">
      <div class="fixed-block">
        <Cart
          :cart="EventBus.cartGoods"
          :number="EventBus.cartNumber"
          :sum="EventBus.cartSum"
        />
        <FilterGoods :filterfunction="EventBus.filterFunction" :filterparam="EventBus.filterParam" />
      </div>
      <Cards :goods="EventBus.visibleGoods" :ismoregoods="EventBus.isMoreGoods" />
    </div>
    <zap-slideout />
  </div>
</template>

<script>
import Cards from './Cards'
// import SomeShit from './SomeShit'
import ZapSlideout from './ZapSlideout.vue'
import Cart from './Cart'
// import moreGoods from './goods'
import FilterGoods from './Filter'
import { EventBus } from './EventBus'

export default {
  name: 'Main',
  components: {
    Cards,
    // SomeShit,
    ZapSlideout,
    Cart,
    FilterGoods
  },
  props: {
    title: String
  },
  data () {
    return {
      EventBus: EventBus
      // text: 'Hello, world!',
      // firstName: 'I',
      // lastName: 'Am',
      // randColor: '',
      // goods: [],
      // visibleGoods: [],
      // moreGoods: moreGoods,
      // filterParam: 50
    }
  },
  computed: {
    // cartGoods () {
    //   return this.goods.filter(good => good.inCart > 0)
    // },
    // cartNumber () {
    //   return this.cartGoods.reduce(function (accumulator, currentValue) {
    //     return accumulator + currentValue.inCart
    //   }, 0)
    // },
    // cartSum () {
    //   return this.cartGoods.reduce(function (accumulator, currentValue) {
    //     return accumulator + currentValue.count * Number(currentValue.price)
    //   }, 0)
    // },
    // isMoreGoods () {
    //   return this.moreGoods.length != this.goods.length
    // }
  },
  watch: {
    // goods: function (newGoods) {
    //   this.filterFunction(this.filterParam)
    // }
  },
  created () {
    if (EventBus.goods.length == 0) {
      EventBus.moreElements(4)
    }
    EventBus.filterFunction(EventBus.filterParam)
    EventBus.$on('cart', EventBus.chooseToCart)
    EventBus.$on('moreElements', () => EventBus.moreElements(2))
    EventBus.$on('plusGood', EventBus.addToCart)
    EventBus.$on('minusGood', EventBus.removeFromCart)
    EventBus.$on('deleteGood', EventBus.deleteFromCart)
  },
  beforeDestroy () {
    EventBus.$off()
  },
  methods: {
    // moreElements: function (count) {
    //   for (let i = 0; i < count; i++) {
    //     if (moreGoods.length > this.goods.length) {
    //       console.log('больше, больше гламура')
    //       this.goods.push(moreGoods[this.goods.length])
    //     }
    //   }
    // },
    // chooseToCart (arg) {
    //   this.goods.forEach(good => {
    //     if (good.title === arg) {
    //       good.inCart = true
    //       if (good.count < 1) { good.count += 1 }
    //     }
    //   })
    // },
    // deleteFromCart (arg) {
    //   this.goods.forEach(good => {
    //     if (good.title === arg) {
    //       good.inCart = false
    //       good.count = 0
    //     }
    //   })
    // },
    // addToCart (arg) {
    //   this.goods.forEach(good => { if (good.title === arg) { good.count += 1 } })
    // },
    // removeFromCart (arg) {
    //   this.goods.forEach(good => { if (good.title === arg && good.count > 0) { good.count -= 1 } })
    // },
    // filterFunction (arg) {
    //   this.filterParam = arg
    //   this.visibleGoods = this.goods.filter(good => good.price > arg)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../variables.less';
.info {
  position: relative;
  text-align: center;
  width: 100%;
}
.fixed-block {
  position: fixed;
  z-index: 9;
  top: 5px;
  right: 5px;
}
// .main {
//   background-color: @almostwhite;
// }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
