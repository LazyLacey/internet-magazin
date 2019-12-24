<template>
  <div class="filter-goods">
    Цена больше, чем <input v-model="priceMore" type="number" @change="filterfunction(priceMore)">
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    filterfunction: Function
  },
  data () {
    return {
      priceMore: 0
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.filter-goods {
  width: 125px;
  background-color: white;
  margin-top: 20px;
  padding-top: 10px;
}
input {
  width: 90%;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-top: 10px;

}

</style>
