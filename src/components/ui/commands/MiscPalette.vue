<template>
  <div class="misc-palette palette row">
    <q-btn icon="icon-misc-tabs"></q-btn>
    <q-btn
      icon="icon-misc-table"></q-btn>
  </div>
</template>

<script>

export default {
  name: 'PaMiscPalette',
  data () {
    return {
      chartDefs: []
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
.misc-palette
  background-color #002b24
  height 48px
.misc-palette, .palette-popover
  .q-btn
    padding 0
    width 40px
  .q-icon:before
    font-size: 24px;
    width: 24px;
    height: 24px;
.palette-popover
  color #fff
  .q-btn-dropdown-arrow
    width 24px
    background-color rgba(255,255,255,0.2)
</style>
