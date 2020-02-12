<template>
  <div class="top-routing-panel">
    <router-link to="/">
      <img class="logo-icon" src="/images/ikea-logo.svg">
    </router-link>
    <div class="icon-wrapper">
      <router-link to="/cart">
        <div v-if="cartNumber" class="cart-counter">
          {{ cartNumber }}
        </div>
        <svg class="cart-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="49" />
          <path d="M36.1091 45.3778C37.4568 38.8861 43.3267 34 50.3636 34C57.4006 34 63.2704 38.8861 64.6181 45.3778M36.1091 45.3778H30L35.0909 66H64.9091L70 45.3778H64.6181M36.1091 45.3778H64.6181" stroke-linejoin="round" />
        </svg>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cartNumber'])
  }
}
</script>
<style lang="less" scoped>
@import '../variables.less';
.top-routing-panel {
  display: flex;
  justify-content: space-between;
}
.logo-icon {
  margin: 2vh;
}
.icon-wrapper {
  margin: 2vh;
  display: flex;
  align-items: center;
}
.cart-svg {
  height: 40px;
  margin: 0 2vh;

   &:hover circle{
     opacity: 1;
   }

}
path {
.cart-svg & {
  stroke-width: 4;
  fill: none;
  stroke: black;}
}
a {
  position: relative;
}
.cart-counter {
  position: absolute;
  background-color: yellow;
  color: black;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 50%;
  right: 14px;
}
circle{
  fill: @almostwhite;
  opacity: 0;
  transition: .3s ease;}

</style>
