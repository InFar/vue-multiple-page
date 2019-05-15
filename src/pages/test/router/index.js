import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testmo',
      component: () => import('../components/test-one.vue')
    },
    {
      path: '/test',
      name: 'test_child',
      component: () => import('../components/test-child.vue')
    }
  ]
})
