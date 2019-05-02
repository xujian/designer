<template>
  <div class="screen-size row items-center">
    <div class="display" @click="onDisplayClick">
      <q-icon name="crop_landscape" size="24px"></q-icon>
      <span>{{width}}</span>X<span>{{height}}</span>
    </div>
    <!-- <q-popover class="screensize-popover" v-model="isPanelActive">
      <q-input hide-underline dark
      float-label="宽度"
      v-model="width"
      type="number"
      maxlength="5"
      autocomplete="off"></q-input>
      <q-input hide-underline dark
      float-label="高度"
      v-model="height"
      type="number"
      maxlength="5"
      autocomplete="off"></q-input>
      <q-btn @click="save" dark>保存</q-btn>
    </q-popover> -->
  </div>
</template>

<script>
export default {
  name: 'PaScreenSize',
  data () {
    return {
      width: 1920,
      height: 540,
      isPanelActive: false
    }
  },
  methods: {
    onDisplayClick () {
      this.isPanelActive = !this.isPanelActive
    },
    save () {
      this.$bus.emit('canvas', {
        command: 'changeSize',
        data: {
          width: this.width,
          height: this.height
        }
      })
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus">
.screen-size
  position relative
  .display
    padding 0 12px
    font-size 12px
    height 48px
    line-height 48px
    cursor pointer
    transition all .3s
    &:hover
      background-color rgba(255,255,255,.2)
  .x
    padding 0 4px
  .q-input
    width 40px
    color #999
  .q-field-icon
    margin-right 0
    margin-top 0
.screensize-popover
  padding 12px
</style>
