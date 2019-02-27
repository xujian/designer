<template>
  <div class="row">
    <pa-screen-size></pa-screen-size>
    <pa-chart-palette></pa-chart-palette>
    <pa-misc-palette></pa-misc-palette>
  </div>
</template>

<script>
import PaScreenSize from './ScreenSize.vue'
import PaChartPalette from './ChartPalette.vue'
import PaMiscPalette from './MiscPalette.vue'

export default {
  nameL: 'PaCommandBar',
  components: {
    PaScreenSize,
    PaChartPalette,
    PaMiscPalette
  }
}
</script>

<style>
@import '../../../assets/icons.css';
.palette {
  height: 48px;
  border: solid 4px #005d51;
}
</style>
