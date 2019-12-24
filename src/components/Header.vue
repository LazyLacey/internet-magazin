<template>
  <div class="header">
    <menu-button />
    <div class="text">
      HEADER
    </div>
  </div>
</template>

<script>
import MenuButton from './MenuButton.vue'

export default {
  components: {
    MenuButton
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
.header {
  background-color: rgb(41, 41, 41);
  display: flex;
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;

  padding: 5px;
  margin-bottom: 10px;
}
.text {
  color: rgb(228, 228, 228);
  flex-grow: 1;
}
</style>
