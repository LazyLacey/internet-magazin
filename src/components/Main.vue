<template>
  <div class="main">
    <!-- <TopRoutingPanel /> -->
    <!-- @click="chponk"> -->
    <div class="info">
      <div class="fixed-block">
        <Cart />
        <FilterGoods />
      </div>
      <Cards whereused="main" />
    </div>
    <!-- <zap-slideout /> -->
  </div>
</template>

<script>
import Cards from './Cards'
// import TopRoutingPanel from './TopRoutingPanel'
// import SomeShit from './SomeShit'
// import ZapSlideout from './ZapSlideout.vue'
import Cart from './Cart'
import FilterGoods from './Filter'
import store from '../store'
import { mapState } from 'vuex'

export default {
  name: 'Main',
  components: {
    Cards,
    // SomeShit,
    // ZapSlideout,
    Cart,
    FilterGoods
    // TopRoutingPanel
  },
  props: {
  },
  data () {
    return {
      // first: ['critical', 'eq', 'creative', 'digital', 'communication', 'system', 'cooperation'],
      // second: ['art', 'business', 'craft', 'digits', 'logic', 'music', 'nature', 'people', 'science', 'sport', 'technology'],
      urls: [],
      normurls: []
    }
  },
  computed: {
    ...mapState(['goods'])
  },
  created () {
    if (this.goods.length == 0) {
      this.moreElements(4)
    }
    // for (let i in this.first) {
    //   for (let j in this.second) {
    //     this.urls.push('http://api.skillfolio.ru/professions/getlist/' + this.first[i] + '/' + this.second[j] + '/')
    //   }
    // }

    // console.log(this.urls)
    // const normurls = []
    // for (let i in this.urls) {
    //   const Http = new XMLHttpRequest()
    //   const url = this.urls[i]
    //   Http.open('GET', url)
    //   Http.send()

    //   Http.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //       console.log(Http.responseText)
    //       normurls.push(Http.responseURL)
    //     }
    //   }
    // }
    // console.log(normurls)
    // this.normurls = normurls
  },
  methods: {
    moreElements (value) {
      store.commit('moreElements', value)
    // },
    // chponk () {
    //   console.log(this.normurls)
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
