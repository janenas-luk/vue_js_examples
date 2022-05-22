import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Rated18 from '../views/Rated18'
import Rated35 from '../views/Rated35'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rated18',
      name: 'Rated18',
      component: Rated18,
      beforeEnter: (to, from, next) => {
        alert("You are kinda old with the age of " + localStorage.age);
        next()
      }
    },
    {
        path: '/rated35',
        name: 'Rated35',
        component: Rated35,
        beforeEnter: (to, from, next) => {
            alert("You are kinda old with the age of " + localStorage.age);
            next()
        }
    }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.name === "Home") {
        next()
    } else if (to.name === "Rated18" && localStorage.age >= 18) {
        next()
    } else if (to.name === "Rated35" && localStorage.age >= 35) {
        next()
    } else {
        alert("Your age is to low")
        next({ name : "Home" })
    }
})

export default router