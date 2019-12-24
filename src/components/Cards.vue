<template>
  <div class="cards">
    <ul>
      <Card
        v-for="good in goods"
        :key="good.title"
        :title="good.title"
        :img="good.img"
        :price="good.price"
        :description="good.description"
        :incart="good.inCart"
        @cart="$emit('cart', $event)"
      />
    </ul>
    <!-- <ul id="example-1">
        <li v-for="good in goods" :key="good.title">
            <img :src="good.img">
            <div class=title>{{good.title}}</div>
            <div class=description1>{{good.description1}}</div>
            <div class=price>{{good.price+" ₽"}}</div>
        </li>
    </ul> -->
    <div class="button" @click="$emit('moreElements')">
      Показать еще 2
    </div>
  </div>
</template>

<script>
// import moreGoods from './goods'
import Card from './Card'

export default {
  components: {
    Card
  },
  props: {
    goods: Array
  },
  data () {
    return {
      // goods: [
      //   {
      //     title: 'Блохэй',
      //     price: '1 499',
      //     description: 'Мягкая игрушка, акула, 100 см',
      //     img: './images/blohay.webp'
      //   },
      //   {
      //     title: 'Дуктиг',
      //     price: '6 299',
      //     description: 'Детская кухня, 72x40x109 см',
      //     img: './images/ductig.webp'
      //   },
      //   {
      //     title: 'Мола',
      //     price: '149',
      //     description: 'Фломастер',
      //     img: './images/mola.webp'
      //   },
      //   {
      //     title: 'Сагоскатт',
      //     price: '349',
      //     description: 'Мягкая игрушка',
      //     img: './images/sagoskatt.webp'
      //   }
      // ],
      // moreGoods: moreGoods
    }
  },
  methods: {
    // moreElements: function () {
    //   for (let i = 0; i < 2; i++) {
    //     console.log(moreGoods)
    //     this.goods.push(moreGoods.pop())
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../variables.less";
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
