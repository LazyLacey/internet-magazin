<template>
  <div class="card">
    <img :src="img" :class="whereused" />
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
      <div class="to-cart" :class="{ added: incart }" @click="EventBus.chooseToCart(title)">
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
import { EventBus } from './EventBus'
export default {
  components: {},
  props: ['img', 'title', 'description', 'price', 'incart', 'whereused'],
  data () {
    return {
      EventBus: EventBus
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
    }
  }
}
</script>

<style scoped lang="less">
@import '../variables.less';

.card {
  display: block;
  padding: 0 32px;
  margin: 5px 10px;
  background-color: white;
  position: relative;
}
img {
  width: 203px;
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
}
a{
  color: #2c3e50;
  text-decoration: none;
}

.description {
  font-size: 14px;
  text-align: start;
}
.price {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -1px;
  white-space: nowrap;
  text-align: start;
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
