<template>
  <div class="filter-goods">
    Цена больше, чем <input v-model="priceMore" type="number" @change="filterfunction(Number(priceMore))">
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    filterfunction: Function,
    filterparam: Number
  },
  data () {
    return {
      priceMore: this.filterparam
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
@import "../variables.less";
.filter-goods {
  width: 125px;
  background-color: white;
  margin-top: 20px;
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
