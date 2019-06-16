import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Editor from './views/Editor.vue'
import Login from './views/login'
import Projects from './views/projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/editor',
          name: 'editor',
          component: Editor
        },
        {
          path: '/projects',
          name: 'projects',
          component: Projects
        }
      ]
    },
    {
      path: '/login', // 登录
      component: Login
    }
  ]
})
