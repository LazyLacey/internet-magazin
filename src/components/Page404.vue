<template>
  <div class="page-404">
    <div class="message">
      По вашему запросу ничего не найдено :(
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page-404 {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.message {
  color: gray;
  font-size: 27px;
}
</style>
