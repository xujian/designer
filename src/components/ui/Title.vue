<template>
  <div class="title-bar row">
    <q-btn flat dense
      class="button menu-toggle"
      @click="onToggleClicked"
      aria-label="Menu">
      <q-icon name="menu" />
    </q-btn>
    <q-collapsible
      class="title" label="Designer" sublabel="" height="48px">
    </q-collapsible>
  </div>
</template>
<script>
export default {
  name: 'PaTitle',
  methods: {
    onToggleClicked () {
      this.$bus.emit('menuToggled')
    }
  }
}
</script>
<style lang="stylus">
.title-bar
  width 240px
  height 48px
  background #004D40
  overflow visible
  .title
    width 192px
  .q-item-side
    color #004d40
  .q-item-label
    line-height 32px
</style>
