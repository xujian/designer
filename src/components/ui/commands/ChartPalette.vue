<template>
  <div class="chart-palette palette row">
    <q-btn-dropdown :icon="category.icon" split
      v-for="(category, i1) in categories" :key="i1">
      <q-list link class="palette-popover row gutter-none">
        <q-item class="posit col-3"
          v-for="(def, i2) in category.presets" :key="i2">
          <div class="pick">
            <div class="image flex justify-center">
              <q-icon :name="def.icon"></q-icon>
            </div>
            <h6>{{def.title}}</h6>
          </div>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>

export default {
  name: 'PaChartPalette',
  data () {
    return {
      categories: [
        {
          tilte: '柱图',
          icon: 'icon-chart-bar',
          presets: [
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            },
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            },
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            },
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            }
          ]
        },
        {
          tilte: '线图',
          icon: 'icon-chart-line',
          presets: [
            {
              title: '横向柱状图',
              icon: 'icon-chart-pie'
            },
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            },
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            },
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            }
          ]
        },
        {
          tilte: '饼图',
          icon: 'icon-chart-pie',
          presets: [
            {
              title: '横向柱状图',
              icon: 'icon-chart-pie'
            },
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            },
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            },
            {
              title: '横向柱状图',
              icon: 'icon-chart-bar-horizon'
            }
          ]
        }
      ]
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
  width 400px
  padding 0 !important
  .posit
    padding 0
    text-align center
    .pick
      width: 100px
      text-align  center
      height 100px
      position relative
      .image
        width 100%
        height 100%
      h6
        font-size 12px
        font-weight 100
        width 100%
        line-height  32px
        position absolute
        bottom  0
  .q-btn-dropdown-arrow
    width 24px
    background-color rgba(255,255,255,0.2)
</style>
