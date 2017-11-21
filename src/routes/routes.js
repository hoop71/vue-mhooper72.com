import Vue from 'vue'
import Router from 'vue-router'

// Pages
import HelloWorld from '../components/pages/HelloWorld/HelloWorld'
import Home from '../components/pages/Home/Home'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]

export default routes
