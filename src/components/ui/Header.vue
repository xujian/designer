<template>
  <q-layout-header>
    <q-toolbar color="primary">
      <pa-title></pa-title>
      <pa-command-bar></pa-command-bar>
      <q-btn flat dense
        class="button aside-toggle"
        @click="onToggleClicked"
        aria-label="Menu">
        <q-icon name="more_vert" />
      </q-btn>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
import PaTitle from '@/components/ui/Title'
import PaCommandBar from '@/components/ui/commands'

export default {
  name: 'PaHeader',
  components: {
    PaTitle,
    PaCommandBar
  },
  methods: {
    onToggleClicked () {
      this.$bus.emit('asideToggled')
    }
  }
}
</script>

<style lang="stylus">
header
  .button
    width 48px
    height 48px
</style>
