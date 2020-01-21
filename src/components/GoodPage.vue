<template>
  <div class="good-page">
    <Card
      :title="goodPage.title"
      :img="goodPage.img"
      :price="goodPage.price"
      :description="goodPage.description"
      :incart="goodPage.inCart"
      whereused="goodpage"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

import Card from './Card'
import store from '../store'

export default {
  components: {
    Card
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['goodPage'])
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
    }
  }

}
</script>

<style scoped lang="less">
@import '../variables.less';

</style>
