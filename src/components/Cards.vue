<template>
  <div class="cards">
    <ul>
      <Card
        v-for="good in visibleGoods"
        :key="good.title"
        :title="good.title"
        :img="good.img"
        :price="good.price"
        :description="good.description"
        :incart="good.inCart"
        :whereused="whereused"
      />
    </ul>
    <div v-if="isMoreGoods" class="button" @click="moreElements(2)">
      Показать еще
    </div>
  </div>
</template>

<script>
import Card from './Card'
import { mapGetters } from 'vuex'
import store from '../store'

export default {
  components: {
    Card
  },
  props: {
    // goods: Array,
    // ismoregoods: Boolean,
    whereused: String
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['isMoreGoods', 'visibleGoods'])
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
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

.button {
  padding: 12px;
  border-radius: 2px;
  width: 150px;
  font-size: 14px;
  font-weight: 700;
  background-color: #0058a3;
  color: @almostwhite;
}
</style>
