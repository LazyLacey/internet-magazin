<template>
  <div class="cart" :class="{ 'yea-modal': modal }">
    <div v-if="!modal" class="cart-label" @click="openModal">
      <div class="text" v-text="'В корзине: ' + number" />
    </div>
    <div v-if="modal" class="modal">
      <div class="header">
        <img class="cross" :src="url" @click="closeModal">
      </div>
      <div class="body">
        <ul>
          <div v-for="good in cart" :key="good.title" class="good-position">
            <div class="good-name">
              {{ good.title }}
            </div>
            <div class="good-number">
              <div class="good-price">
                {{ Number(good.price) * good.count }}
              </div>
              <div class="minus" @click="$emit('minusGood', good.title)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
              </div>
              <div class="number">
                {{ good.count }}
              </div>
              <div class="plus" @click="$emit('plusGood', good.title)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
              </div>
              <div class="delete" @click="$emit('deleteGood', good.title)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z" /></svg>
              </div>
            </div>
          </div>
        </ul>
        <div class="cart-sum">
          <div>
            Всего:
          </div>
          <div>
            {{ sum }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    cart: Array,
    number: Number,
    sum: Number
  },
  data () {
    return {
      modal: false,
      url: './images/close.svg'
    }
  },
  methods: {
    openModal: function () {
      this.modal = true
    },
    closeModal: function () {
      this.modal = false
    }
  }
}
</script>

<style scoped lang="less">
@import "../variables.less";
ul {
  padding: 0;
  margin: 5px;
}
.good-position {
  display:flex;
  justify-content: space-between;
}
.good-name {
  text-decoration: underline;

}
svg {
  width:inherit;
  height:auto;
}
.good-number {
  display:flex;
}
.delete {
  width:20px;
  margin-left: 40px;
  margin-right: 5px;
}
.number {
  min-width: 50px;
}
path {
  fill: @dark;
}
.minus {
  width: 20px;

}
.plus {
  width: 20px;

}
.cart&.yea-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: @overlay;
}
.cart-label {

  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 42px;
  border-radius: 10px;
  background-color: @dark;
}
.text {
  color: @almostwhite;
  text-align: center;
}
.modal {
  margin: auto;
  width: 500px;
  height: 280px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: @almostwhite;
  border-radius: 9px;
}
.cross {
  position: absolute;
  right: 3px;
  top: 3px;
  height: 15px;
  color: @dark;
}
.good-price {
  margin-right: 40px;
}
.body {
  margin: 10px;
  margin-top: 35px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 9px;
  background-color: rgb(245, 245, 245);
}
.cart-sum {
  bottom: 2%;
  position: absolute;
  display:flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
