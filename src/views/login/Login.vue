<template>
  <q-layout>
    <q-page-container class="login-page">
      <div class="row justify-center full-height">
        <div class="col-4 self-center">
          <div class="login-form"></div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
.login-page
  height  100vh
  .login-form
    margin auto
    width 400px
    height 400px
    background-color #009688
</style>
