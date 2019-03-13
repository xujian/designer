<template>
  <div class="themes row">
    <q-btn-dropdown
      split
      color="secondary"
      flat
      :label="theme">
      <q-list link>
        <q-item v-for="(theme, index) in $chartlib.configs.themes"
          :key="index"
          @click.native="itemClick(theme)">
          <q-item-main>{{theme}}</q-item-main>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: 'PaThemesBar',
  data () {
    return {
      theme: this.$chartlib.theme
    }
  },
  methods: {
    itemClick (theme) {
      this.theme = theme
      this.$chartlib.theme = theme
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus">

</style>
