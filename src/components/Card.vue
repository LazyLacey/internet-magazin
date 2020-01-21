<template>
  <div class="card" :class="classForElement">
    <img :src="img" />
    <div class="info">
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
      <div v-if="isButtonInCart" class="to-cart" :class="{ added: incart }" @click="chooseToCart(title)">
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
      buttonInCart: [
        'main'
      ]
    }
  },
  computed: {
    isButtonInCart () {
      console.log(this.buttonInCart.indexOf(this.whereused) != -1)
      return this.buttonInCart.indexOf(this.whereused) != -1
    },
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
    chooseToCart (value) {
      store.commit('chooseToCart', value)
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
    flex-grow: 1;
    @media screen and (max-width: 768px) {
      width: 100%;
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
    padding: 5vw;
    padding-right: 0;
    @media screen and (max-width: 768px) {
    padding: 5vw 1vw;
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
</style>
