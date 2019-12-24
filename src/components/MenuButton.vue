<template>
  <div
    class="menu-button"
    :class="{ active: isClicked }"
    @click="change"
  >
    <div class="stick a" />
    <div class="stick b" />
    <div class="stick c" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isClicked: false
    }
  },
  methods: {
    change: function (event) {
      this.isClicked = !this.isClicked
      console.log('change')
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="less">
@import "../variables.less";

.menu-button {
  transition: 200ms ease-in;
  flex-grow: 0;

  &:hover .b {
    transform: scaleX(1);
  }
  &.active {
    transform: rotate(-180deg);
  }
  &.active .a {
    transform: rotate(45deg) translateY(-2px);
  }
  &.active .b {
    background-color: rgba(128, 128, 128, 0);
  }
  &.active .c {
    transform: rotate(-45deg) translateY(2px);
  }
}

.stick {
  background-color: @darkstyle;
  height: 4px;
  width: 33px;
  margin: 7px 0;
  border-radius: 3px;
  transform-origin: top left;
  transition: 200ms ease-in;

  &.a {
    transform-origin: bottom left;
  }
  &.b {
    transform: scaleX(0.8);
  }
}
</style>
