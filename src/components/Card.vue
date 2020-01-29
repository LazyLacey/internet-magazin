<template>
  <div class="card" :class="classForElement">
    <img :src="img" />
    <div class="info">
      <div class="info-header">
        <div class="title">
          <router-link :to="'/good/'+title">
            {{ title }}
          </router-link>
        </div>
        <div class="description">
          {{ description }}
        </div>
        <div class="price">
          {{ beautyPrice(price) + " ₽" }}
        </div>
      </div>
      <div v-if="isButtonInCart(1)" class="to-cart" :class="{ added: incart }" @click="chooseToCart(title)">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="99"
            height="99"
            fill="none"
          />
          <path class="vertical" d="M50 75V25C50 7 87.5 14 75 30C58.0223 51.7315 48.5 59 43 75" pathLength="100" />
          <path class="horisontal" d="M75 50L25 50C8.00006 50 13 34.5 28.9999 49.5C36.1992 56.2493 41 65 42.9999 75" pathLength="100" />
        </svg>
      </div>
      <div v-if="isButtonInCart(2)" class="to-cart--goodpage_wrapper">
        <div class="to-cart--goodpage_counter">
          <div class="to-cart--goodpage_text">
            Количество
          </div>
          <div class="to-cart--goodpage">
            <div class="minus" @click="minusCounter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,11H17v2H7Z" /></svg>
            </div>
            <div class="number">
              {{ counterForGoodpage }}
            </div>
            <div class="plus" @click="plusCounter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z" /></svg>
            </div>
          </div>
        </div>
        <div class="to-cart--goodpage_add" @click="chooseAddToCart">
          <svg class="cart-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4401 39.6C22.405 24.9937 35.3187 14 50.8 14C66.2813 14 79.195 24.9937 82.1599 39.6M19.4401 39.6H6L17.2 86H82.8L94 39.6H82.1599M19.4401 39.6H82.1599" stroke-linejoin="round" />
          </svg>
          Добавить в корзину
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  components: {},
  props: ['img', 'title', 'description', 'price', 'incart', 'whereused'],
  data () {
    return {
      buttonInCart: {
        'main': 1,
        'goodpage': 2
      },
      counterForGoodpage: 0
    }
  },
  computed: {
    classForElement () {
      return 'card--' + this.whereused
    }
  },
  methods: {
    beautyPrice (nPrice) {
      nPrice = String(nPrice)
      let bPrice = ''
      if (nPrice.length > 3) {
        for (let i = 0, c = 1; i < nPrice.length; i++, c++) {
          bPrice += nPrice[i]
          if ((nPrice.length - c) % 3 == 0) {
            bPrice += ' '
          }
        }
      } else {
        bPrice = nPrice
      }
      return bPrice
    },
    minusCounter () {
      if (this.counterForGoodpage > 0) { this.counterForGoodpage -= 1 }
    },
    plusCounter () {
      this.counterForGoodpage += 1
    },
    isButtonInCart (value) {
      return this.buttonInCart[this.whereused] === value
    },
    chooseToCart (value) {
      store.commit('chooseToCart', value)
    },
    chooseAddToCart () {
      store.commit('chooseAddToCart', { name: this.title, amount: this.counterForGoodpage })
    }
  }

}
</script>

<style scoped lang="less">
@import '../variables.less';
@import '../styles/main.less';
@import '../styles/goodpage.less';

</style>
