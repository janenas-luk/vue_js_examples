import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Users from '../views/Users'
import Os from '../views/Os'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/os',
        name: 'Os',
        component: Os
    },
  ]
})
