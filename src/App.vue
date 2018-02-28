<template lang="pug">
  #app
    <navigation></navigation>
    <sidebar></sidebar>
    .content(v-bind:class="{sidebarActive: (sidebarOpen || sidebarSelected) }")
      <router-view/>
    .sidebar__background(
      v-if="sidebarOpen"
      @click="closeSidebar()"
    )
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
      },
      sidebarSelected: (state) => {
        return state.sidebar_selected
      }
    })
  },
  methods: {
    handleResize () {
      if (window.innerWidth < 900 && this.sidebarOpen) {
        if (!this.sidebarSelected) {
          this.$store.commit('CLOSE_SIDEBAR')
        }
      } else if (window.innerWidth > 900 && !this.sidebarOpen) {
        this.$store.commit('OPEN_SIDEBAR')
      }
    },
    closeSidebar () {
      this.$store.commit('CLOSE_SIDEBAR')
      this.$store.commit('UNSELECT_SIDEBAR')
    }
  },
  created () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize).then(function () {
      if (this.sideBarOpen) {
        this.$store.commit('SELECT_SIDEBAR')
      }
    })
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

.sidebar__background
  display: none

@media(max-width: 900px)
  .content
    &.sidebarActive
      margin-left: 0px
  .sidebar__background
    display: block
    background: rgba(0, 0, 0, 0.5)
    position: fixed
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 100

</style>
