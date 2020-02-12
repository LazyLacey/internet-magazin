<template>
  <div class="good-page">
    <TopRoutingPanel />
    <Card
      :title="goodPage.title"
      :img="goodPage.img"
      :price="goodPage.price"
      :description="goodPage.description"
      :incart="goodPage.inCart"
      whereused="goodpage"
    />
    <div v-if="goodPageState.modal" class="good-page_modal-outer">
      <div class="good-page_modal-inner">
        <div>Товар добавлен в корзину!</div>
        <router-link to="/cart">
          Перейти в корзину
        </router-link>
        <img class="cross" src="/images/close.svg" @click="closeModal">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

import Card from './Card'
import store from '../store'
import TopRoutingPanel from './TopRoutingPanel'

export default {
  components: {
    Card,
    TopRoutingPanel
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['goodPage', 'goodPageState'])
    // good () {
    //   console.log('route.title: ' + this.$route.params.title)
    //   console.log(this.$route)
    //   return this.getGood(this.$route.params.title)
    // }
  },
  created () {
    this.getGood(this.$route.params.title)
  },
  methods: {
    getGood (value) {
      store.commit('getGood', value)
    },
    closeModal () {
      store.commit('closeModal')
    }
  },
  beforeRouteLeave (to, from, next) {
    this.closeModal()
    next()
  }

}
</script>

<style scoped lang="less">
@import '../variables.less';
.good-page_modal-outer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: @overlay;
}
.good-page_modal-inner {
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: @almostwhite;
  border-radius: 9px;
  height: 60px;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.cross {
  position: absolute;
  right: 3px;
  top: 3px;
  height: 15px;
  color: @dark;
}

</style>
