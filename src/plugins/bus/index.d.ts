declare function install (): void

declare module 'vue/types/vue' {
  interface Vue {
    $bus: any
  }
}

export {
  install
}