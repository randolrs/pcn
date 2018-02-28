<template lang="pug">
  div.navigation
    div.navigation__left
      a.navigation__menu(@click="toggleSidebar()")
        span Menu
      router-link.clear-link(to='/')
        span 5150
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  methods: {
    toggleSidebar () {
      if (this.sidebarOpen) {
        this.$store.commit('UNSELECT_SIDEBAR')
      } else {
        this.$store.commit('SELECT_SIDEBAR')
      }
      this.$store.commit('TOGGLE_SIDEBAR')
    }
  },
  computed: {
    ...mapState({
      sidebarOpen: (state) => {
        return state.sidebar_open
      },
      sidebarSelected: (state) => {
        return state.sidebar_selected
      }
    })
  }
}
</script>

<style lang="sass" scoped>
@import '../../sass/vars'
.navigation
  background: #fff
  box-shadow: 0 2px 5px rgba(0,0,0,.26)
  position: fixed
  top: 0px
  left: 0px
  right: 0px
  height: $navigationHeight
  z-index: 99
  &__left, &__right
    display: inline-block
    a
      line-height: 30px
      padding: ($navigationHeight - 30px) / 2
      display: inline-block
  &__menu
    cursor: pointer
</style>
