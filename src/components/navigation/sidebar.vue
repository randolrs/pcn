<template lang="pug">
  div.sidebar(v-bind:class="{open: (sidebarOpen || sidebarSelected)}")
    ul.sidebar__list
      li: a
        span Home
      li: a
        span Recent
      li: a
        span Podcasts
      li: a
        span Guests
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  methods: {
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
.sidebar
  position: fixed
  left: 0px
  bottom: 0px
  width: $sidebarWidth
  top: $navigationHeight
  background: $sidebarBackground
  z-index: 98
  border-right: 1px solid #E0E0E0
  transform: translateX((-1 * $sidebarWidth))
  &.open
    transform: translateX(0)
    transition: transform 0.5s
  &__list
    padding: 10px 0px
    list-style: none
    li
      display: block
      a
        padding: 15px 20px
        display: block
        color: #212121
        font-weight: 600
        cursor: pointer
        transition: 0.2s
        &:hover
          background: #E0E0E0
@media(max-width: 900px)
  .sidebar
    top: 0px
    z-index: 101
    &__list
      padding: 0px

</style>
