<template>
  <div id="app">
    <navigation></navigation>
    <sidebar></sidebar>
    <div class="content" v-bind:class="{sidebarActive: sidebarOpen}">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Navigation from './components/navigation/navigation.vue'
import Sidebar from './components/navigation/sidebar.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Navigation,
    Sidebar
  },
  computed: {
    ...mapState({
      sidebarOpen: (state) => {
        return state.sidebar_open
      }
    })
  },
  methods: {
    handleResize () {
      if (window.innerWidth < 900 && this.sidebarOpen) {
        this.$store.commit('CLOSE_SIDEBAR')
      } else if (window.innerWidth > 900 && !this.sidebarOpen) {
        this.$store.commit('OPEN_SIDEBAR')
      }
    }
  },
  created () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang='sass'>
@import 'sass/application'

.content
  margin-top: $navigationHeight
  min-height: 100vh
  transition: 0.5s
  max-width: 100%
  &.sidebarActive
    margin-left: $sidebarWidth
  &__main
    padding: 20px
    max-width: 100%

</style>
