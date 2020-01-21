<template>
  <div class="filter-goods">
    Цена больше, чем <input
      v-model="priceMore"
      type="number"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'

export default {
  components: {
  },
  props: {
    // filterfunction: Function,
    // filterparam: Number
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['filterParam']),
    priceMore: {
      get () {
        return this.filterParam
      },
      set (value) {
        this.changeFilterParam(value)
      }
    }
  },
  methods: {
    changeFilterParam (value) {
      store.commit('changeFilterParam', value)
    }
  }
}
</script>

<style scoped lang="less" >
    @import "../variables.less";
    .filter-goods {
    width: 125px;
    background-color: white;
    margin-top: 10px;
    padding-top: 10px;
    border-radius: 10px;
    background-color: @dark;
    color: @almostwhite;
    }
    input {
    width: 90%;
    box-sizing: border-box;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 3px;
    color: @almostwhite;
    border-color: @almostwhite;
    background-color: @dark;
    border-width: 1px;
    padding-left: 3px;

    }

    </style>
