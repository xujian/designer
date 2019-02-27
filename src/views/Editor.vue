<template>
  <q-page class="flex">
    <pa-canvas></pa-canvas>
  </q-page>
</template>

<script>
import PaCanvas from '@/components/tools/Canvas'

export default {
  name: 'EditorPage',
  data () {
    return {

    }
  },
  components: {
    PaCanvas
  }
}
</script>

<style>

</style>
