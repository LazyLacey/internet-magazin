<template>
  <div class="main">
    <div class="info">
      <div class="fixed-block">
        <Cart
          :cart="cartGoods"
          :number="cartNumber"
          :sum="cartSum"
          @plusGood="addToCart"
          @minusGood="removeFromCart"
          @deleteGood="deleteFromCart"
        />
        <FilterGoods :filterfunction="filterFunction" :filterparam="filterParam" />
      </div>

      <!-- <div
        :style="styleObj"
        :name="getMyName()"
        @click="randomize()"
      >
        click here
      </div> -->
      <Cards :goods="visibleGoods" @cart="chooseToCart" @moreElements="moreElements(2)" />
    </div>
    <zap-slideout />
  </div>
</template>

<script>
import Cards from './Cards'
// import SomeShit from './SomeShit'
import ZapSlideout from './ZapSlideout.vue'
import Cart from './Cart'
import moreGoods from './goods'
import FilterGoods from './Filter'

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
      text: 'Hello, world!',
      firstName: 'I',
      lastName: 'Am',
      randColor: '',
      goods: [
        {
          title: 'Блохэй',
          price: 1499,
          description: 'Мягкая игрушка, акула, 100 см',
          img: './images/blohay.webp',
          inCart: false,
          count: 0
        },
        {
          title: 'Дуктиг',
          price: 6299,
          description: 'Детская кухня, 72x40x109 см',
          img: './images/ductig.webp',
          inCart: false,
          count: 0
        },
        {
          title: 'Мола',
          price: 149,
          description: 'Фломастер',
          img: './images/mola.webp',
          inCart: false,
          count: 0
        },
        {
          title: 'Сагоскатт',
          price: 349,
          description: 'Мягкая игрушка',
          img: './images/sagoskatt.webp',
          inCart: false,
          count: 0
        }
      ],
      visibleGoods: [],
      moreGoods: moreGoods,
      filterParam: 100
    }
  },
  computed: {
    // styleObj () {
    //   // console.log('styleObj called')
    //   return { backgroundColor: this.randColor }
    // },
    // myName () {
    //   // console.log('myName called')
    //   return this.firstName + ' ' + this.lastName
    // },
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
    }
  },
  watch: {
    goods: function (newGoods) {
      this.filterFunction(this.filterParam)
    }
  },
  created () {
    this.filterFunction(this.filterParam)
  },
  methods: {
    // getStyleObject: function () {
    //   // console.log('getStyleObject called')
    //   return { backgroundColor: this.randColor }
    // },
    // getMyName () {
    //   // console.log('getMyName called')
    //   return this.firstName + ' ' + this.lastName
    // },
    // randomize: function () {
    //   var hexValues = [
    //     '0',
    //     '1',
    //     '2',
    //     '3',
    //     '4',
    //     '5',
    //     '6',
    //     '7',
    //     '8',
    //     '9',
    //     'a',
    //     'b',
    //     'c',
    //     'd',
    //     'e'
    //   ]
    //   var newColor = '#'
    //   for (var i = 0; i < 6; i++) {
    //     var x = Math.round(Math.random() * 14)
    //     var y = hexValues[x]
    //     newColor += y
    //   }
    //   this.randColor = newColor
    // },
    moreElements: function (count) {
      for (let i = 0; i < count; i++) {
        if (moreGoods.length > 0) {
          console.log('больше, больше гламура')
          this.goods.push(moreGoods.pop())
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../variables.less";
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
.main {
  background-color: @almostwhite;
}
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
