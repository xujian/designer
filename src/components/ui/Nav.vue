<template>
  <q-list
    no-border
    link
    inset-delimiter
    class="nav-list"
  >
    <q-list no-border link inset-delimiter>
      <q-item-label header>Navigation</q-item-label>
      <q-item to="/" exact>
        <q-item-section icon="fas fa-home" />
        <q-item-section label="Home" />
      </q-item>
      <q-item to="/about">
        <q-item-section icon="fas fa-info" />
        <q-item-section label="About" />
      </q-item>
    </q-list>
  </q-list>
</template>

<script>
export default {
  name: 'PaNav'
}
</script>

<style lang="stylus">
.nav
  .q-list-header
    color #fff
</style>
