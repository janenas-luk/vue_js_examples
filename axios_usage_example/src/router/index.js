import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../views/Posts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    }
  ]
})
