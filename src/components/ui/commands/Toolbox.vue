<template>
  <div class="toolbox row">
    <q-btn :icon="category.icon"
      v-for="(category, i1) in categories" :key="i1">
      <q-menu dark class="toolbox-menu">
        <q-splitter :value="10" class="toolbox-splitter">
          <template v-slot:before>
            <q-tabs :value="'sub1'" class="text-white" vertical>
              <q-tab name="sub1" icon="mail"></q-tab>
              <q-tab name="sub2" icon="mail"></q-tab>
              <q-tab name="sub3" icon="mail"></q-tab>
            </q-tabs>
          </template>
          <template v-slot:after class="toolbox-main">
            <q-tab-panels :value="'sub1'" dark>
              <q-tab-panel name="sub1">
                <q-list link class="icon-list row gutter-none">
                  <q-item class="posit col-3 text-white"
                    v-for="(def, i2) in category.presets" :key="i2">
                    <div class="pick">
                      <div class="image flex justify-center">
                        <q-icon :name="def.icon"></q-icon>
                      </div>
                      <h6>{{ def.title }}</h6>
                    </div>
                  </q-item>
                </q-list>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>

export default {
  name: 'PaToolbox',
  data () {
    return {
      categories: [
        {
          tilte: '图表',
          icon: 'insert_chart_outlined',
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
          tilte: '文字',
          icon: 'insert_chart_outlined',
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
          tilte: '图片',
          icon: 'insert_chart_outlined',
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
.toolbox
  background-color #002b24
  height 48px
  margin-right -4px
  .q-btn-dropdown-split .q-btn-dropdown-arrow
    border-right 1px solid rgba(255,255,255,0.3)
    width 20px
  .q-splitter
    height 250px
.toolbox, .toolbox-menu
  .q-btn
    padding 0
    width 40px
  .q-icon:before
    font-size: 24px;
    width: 24px;
    height: 24px;
.toolbox-menu
  color #fff
  width 400px
  padding 0 !important
  .q-splitter
    height 250px
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
.toolbox-splitter
  background-color #222
  width  600px
  height 200px
  .q-tab-panels
    background transparent
  .q-tab-panel
    padding 0
</style>
