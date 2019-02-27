<template>
  <div class="chart-palette palette row">
    <q-btn-dropdown icon="icon-chart-bar" split>
      <q-list link class="palette-popover">
        <q-item>
          <q-item-side>
            <q-icon name="icon-chart-bar-horizon"></q-icon>
          </q-item-side>
          <q-item-main>横向柱状图</q-item-main>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn
      icon="icon-chart-line"></q-btn>
    <q-btn icon="icon-chart-pie"></q-btn>
  </div>
</template>

<script>

export default {
  name: 'PaChartPalette',
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
.chart-palette
  background-color #002b24
  height 48px
  margin-right -4px
  .q-btn-dropdown-split .q-btn-dropdown-arrow
    border-right 1px solid rgba(255,255,255,0.3)
    width 20px
.chart-palette, .palette-popover
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
