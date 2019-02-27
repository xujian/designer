<template>
  <q-btn-dropdown flat split
    class="button-dropdown">
    <q-list link>
      <q-item v-close-overlay>
        <q-item-side icon="folder"></q-item-side>
        <q-item-main>
          <q-item-title>复制</q-item-title>
        </q-item-main>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: 'PaControlMenu'
}
</script>

<style>

</style>
