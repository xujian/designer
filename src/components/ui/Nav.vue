<template>
  <q-list
    no-border
    link
    inset-delimiter
    class="nav-list"
  >
    <q-list no-border link inset-delimiter>
      <q-list-header>Navigation</q-list-header>
      <q-item to="/" exact>
        <q-item-side icon="fas fa-home" />
        <q-item-main label="Home" />
      </q-item>
      <q-item to="/about">
        <q-item-side icon="fas fa-info" />
        <q-item-main label="About" />
      </q-item>

      <q-item-separator />
      <q-list-header>Essential Links</q-list-header>
      <q-item @click.native="openURL('http://quasar-framework.org')">
        <q-item-side icon="fas fa-graduation-cap" />
        <q-item-main label="Docs" sublabel="quasar-framework.org"></q-item-main>
      </q-item>
      <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
        <q-item-side icon="fas fa-comments" />
        <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg"></q-item-main>
      </q-item>
      <q-item @click.native="openURL('http://forum.quasar-framework.org')">
        <q-item-side icon="far fa-clipboard" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org"></q-item-main>
      </q-item>
      <q-item @click.native="openURL('https://twitter.com/quasarframework')">
        <q-item-side icon="fab fa-twitter" />
        <q-item-main label="Twitter" sublabel="@quasarframework"></q-item-main>
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
