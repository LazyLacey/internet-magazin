<template>
  <div class="good-page">
    <Card
      :title="good.title"
      :img="good.img"
      :price="good.price"
      :description="good.description"
      :incart="good.inCart"
    />
  </div>
</template>

<script>
import { EventBus } from './EventBus'
import Card from './Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      EventBus: EventBus
    }
  },
  computed: {
    good () {
      console.log('route.title: ' + this.$route.params.title)
      console.log(this.$route)

      console.log(EventBus.getGood('Блохэй'))
      return EventBus.getGood(this.$route.params.title)
    }
  }

}
</script>

<style scoped lang="less">
@import '../variables.less';
.card {
  display: block;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: 0 32px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: white;
  position: relative;
}
.card > img {
  width: 500px;
}
.title {
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 700;
  text-align: start;

  &:hover {
    text-decoration: underline;
  }
}
a{
  color: #2c3e50;
  text-decoration: none;
}

.description {
  font-size: 14px;
  text-align: start;
}
.price {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -1px;
  white-space: nowrap;
  text-align: start;
}
path {
  stroke-linecap: round;
  stroke-width: 9;
  fill: none;
  stroke: white;
  transition: stroke-dasharray 300ms cubic-bezier(0.41, 0.03, 0.53, 1), stroke-dashoffset 300ms cubic-bezier(0.41, 0.03, 0.53, 1);
  stroke-dashoffset: 0;
}
svg {
  height: inherit;
}
.horisontal {
  stroke-dasharray: 46 54;
}
.to-cart&.added .horisontal {
  stroke-dashoffset: -72;
  stroke-dasharray: 28 72;
  stroke: #0058a3;
}
.vertical {
  stroke-dasharray: 34 66;
}
.to-cart&.added .vertical {
  stroke-dashoffset: -64;
  stroke-dasharray: 36 64;
  stroke: #0058a3;
}
.to-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: #0058a3;
  border: 1px solid #0058a3;
  position: absolute;
  bottom: 2%;
  right: 2%;
  border-radius: 2px;

  &.added {
    background-color: white;
  }
}
</style>
