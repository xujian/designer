<template>
  <q-layout class="layout" container view="lhr lpr lfr">
    <pa-header></pa-header>
    <q-drawer
      side="left"
      :width="240"
      overlay
      v-model="leftDrawerOpen"
      :content-class="'nav'">
      <pa-nav></pa-nav>
    </q-drawer>
    <q-drawer
      side="right"
      :width="320"
      overlay
      v-model="rightDrawerOpen"
      :content-class="'aside'">
      <pa-aside
        :component="asideComponent"
        :data="asideData"
      ></pa-aside>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer></q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import PaHeader from '@/components/ui/Header'
import PaNav from '@/components/ui/Nav'
import PaAside from '@/components/ui/Aside'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      asideComponent: '',
      asideData: null
    }
  },
  mounted () {
    /**
     * 打开左侧栏
     */
    this.$bus.on('menu', () => {
      this.leftDrawerOpen = true
    })
    /**
     * 切换左侧栏
     */
    this.$bus.on('menuToggled', () => {
      this.leftDrawerOpen = !this.leftDrawerOpen
    })
    /**
     * 切换右侧栏
     */
    this.$bus.on('asideToggled', () => {
      this.rightDrawerOpen = !this.rightDrawerOpen
    })
    /**
     * 打开右侧栏
     */
    this.$bus.on('aside', payload => {
      if (payload === false) {
        this.asideComponent = null
        this.rightDrawerOpen = false
        return
      }
      this.asideComponent = payload.component
      this.asideData = payload.data
      this.rightDrawerOpen = true
      console.log('deault layout aside data', payload)
    })
  },
  methods: {
    openURL
  },
  components: {
    PaHeader,
    PaNav,
    PaAside
  }
}
</script>

<style lang="stylus">
.layout
  .nav // 左侧栏
    background-color #00796B
    color #fff
  .aside // 右侧栏
    background-color rgba(68, 68, 68, 0.5)
    color #fff
.aside
  background-color #333
</style>
