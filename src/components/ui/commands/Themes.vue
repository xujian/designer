<template>
  <div class="themes row">
    <q-btn-dropdown
      split
      color="secondary"
      flat
      :label="theme">
      <q-list link>
        <q-item v-for="(name, index) in $chartlib.configs.themes"
          :key="index"
          @click.native="itemClick(name)">
          <q-item-main>{{ name }}</q-item-main>
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
