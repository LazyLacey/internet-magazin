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
      console.log(EventBus.getGood('Блохэй'))
      return EventBus
    }
  }

}
</script>

<style scoped lang="less">
@import '../variables.less';

</style>
