import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * 打开右侧栏
     */
    aside: (component: string | boolean, payload?: any) => void
  }
}
