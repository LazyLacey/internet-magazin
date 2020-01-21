<template>
  <div class="main">
    <div class="info">
      <div class="fixed-block">
        <Cart />
        <FilterGoods />
      </div>
      <Cards whereused="main" />
    </div>
    <zap-slideout />
  </div>
</template>

<script>
import Cards from './Cards'
// import SomeShit from './SomeShit'
import ZapSlideout from './ZapSlideout.vue'
import Cart from './Cart'
import FilterGoods from './Filter'
import store from '../store'
import { mapState } from 'vuex'

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
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['goods'])
  },
  created () {
    if (this.goods.length == 0) {
      this.moreElements(4)
    }
  },
  methods: {
    moreElements (value) {
      store.commit('moreElements', value)
    }
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
