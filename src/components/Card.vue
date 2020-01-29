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

.card {
  position: relative;
  display: block;
  padding: 0 32px;
  margin: 5px 10px;
  background-color: white;
}
.card--goodpage {
  position: relative;
  display: flex;
  justify-content: flex-end;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: 0 10vw;
  margin-top: 0;
  margin-bottom: 0;
  background-color: white;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    padding: 0;
  }

}
img {
  width: 203px;
  .card--goodpage & {
    margin-right: 2vh;
    flex-grow: 1;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: none;
    }
  }
}
.title {
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 700;
  text-align: start;

  &:hover {
    text-decoration: underline;
  }

  .card--goodpage & {
    font-size: 20px;

    &:hover {
    text-decoration: none;
    }
  }
}
.info {
  .card--goodpage & {
    // padding: 5vw;
    // padding-right: 0;
    flex-grow: 0.2;
    @media screen and (max-width: 768px) {
    // padding: 5vw 1vw;
    }
  }
}
.info-header {
  .card--goodpage & {
    margin: 1vh;
    @media screen and (max-width: 768px) {
      margin: 2vh;
    }
  }
}
a {
  color: #2c3e50;
  text-decoration: none;
}

.description {
  font-size: 14px;
  text-align: start;
  .card--goodpage & {
    font-size: 16px;
  }
}
.price {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -1px;
  white-space: nowrap;
  text-align: start;
  .card--goodpage & {
    font-size: 32px;
  }
}
path {
  stroke-linecap: round;
  stroke-width: 9;
  fill: none;
  stroke: white;
  transition: stroke-dasharray 300ms cubic-bezier(0.41, 0.03, 0.53, 1), stroke-dashoffset 300ms cubic-bezier(0.41, 0.03, 0.53, 1);
  stroke-dashoffset: 0;
  .card--goodpage & {
    fill: @dark;
    stroke-width: 0;
  }
  .cart-svg & {
      stroke-width: 5;
      fill: none;
      stroke: white;
    }
}
svg {
  height: inherit;
}
.horisontal {
  stroke-dasharray: 46 54;
}
.to-cart&.added .horisontal {
  stroke-dashoffset: -72;
  stroke-dasharray: 28 72;
  stroke: #0058a3;
}
.vertical {
  stroke-dasharray: 34 66;
}
.to-cart&.added .vertical {
  stroke-dashoffset: -64;
  stroke-dasharray: 36 64;
  stroke: #0058a3;
}
.to-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: #0058a3;
  border: 1px solid #0058a3;
  position: absolute;
  bottom: 2%;
  right: 2%;
  border-radius: 2px;

  &.added {
    background-color: white;
  }
}
.to-cart--goodpage {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 144px;
  border: 1px solid black;
  box-sizing: border-box;
}
.number {
  height: 24px;
  width: 48px;
}

.minus {
  padding: 12px;

}
.plus {
  padding: 12px;

}
svg {
  height: 24px;
}
.to-cart--goodpage_counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 2vh;
}
.to-cart--goodpage_wrapper {
  margin: 1vh;
  @media screen and (max-width: 768px) {
    margin: 2vh;
  }
}
.to-cart--goodpage_add {
  background-color: @ikeablue;
  height: 60px;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
}
.cart-svg {
  width: 24px;
  margin-right: 5px;
}
</style>
