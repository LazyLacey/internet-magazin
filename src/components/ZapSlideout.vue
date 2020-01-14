<template>
  <div class="zap-slideout" :class="{ 'is-open': isOpen }">
    <MenuButton class="zap-slideout-opener" @click="toggle" />
    <ul class="zap-slideout-menu">
      <li v-for="item in menu" :key="item" class="zap-slideout-menu-item">
        {{ item }}
      </li>
      <li v-for="item in smallMenu" :key="item" class="zap-slideout-menu-item--small">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import MenuButton from './MenuButton.vue'
export default {
  components: {
    MenuButton
  },
  data () {
    return {
      openerText: 'Open',
      isOpen: false,
      menu: ['Home', 'Work', 'Contact'],
      smallMenu: ['Tips', 'Resources', 'Shenanigans']
    }
  },
  methods: {
    open: function () {
      console.log('open()')
      this.openerText = 'Close'
      console.log(this.openerText)
      this.isOpen = true
    },
    close: function () {
      console.log('close()')
      this.openerText = 'Open'
      console.log(this.openerText)
      this.isOpen = false
    },
    toggle: function () {
      console.log('toggle()')
      if (this.isOpen) {
        this.close()
      } else {
        this.open()
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "../variables.less";
.zap-slideout {
  position: absolute;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  width: 240px;
  padding: 30px;
  background-color: @darkstyle;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;

  &.is-open {
    transform: translateX(0);
  }
}

.zap-slideout-opener {
  position: absolute;
  top: 20px;
  left: 100%;
  margin-left: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: @almostwhite;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.zap-slideout-menu {
  font-weight: 600;
  color: @almostwhite;
  padding: 0;
}

.zap-slideout-menu-item,
.zap-slideout-menu-item--small {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-top: 20px;
  }
}

.zap-slideout-menu-item {
  font-size: 36px;
  text-align: left;

  & + .zap-slideout-menu-item--small {
    margin-top: 30px;
  }
}

.zap-slideout-menu-item--small {
  font-size: 18px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: @almostwhite;
  text-align: left;
}
ul {
  list-style-type: none;
}
</style>
