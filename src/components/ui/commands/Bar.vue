<template>
  <div class="row">
    <pa-screen-size></pa-screen-size>
    <pa-toolbox></pa-toolbox>
    <pa-themes-bar></pa-themes-bar>
  </div>
</template>

<script>
import PaScreenSize from './ScreenSize.vue'
import PaToolbox from './Toolbox.vue'
import PaThemesBar from './Themes.vue'

export default {
  nameL: 'PaCommandBar',
  components: {
    PaScreenSize,
    PaToolbox,
    PaThemesBar
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
