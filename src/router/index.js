import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/views/Landing'
import AuthenticatedLanding from '@/components/views/AuthenticatedLanding'
// import Hello from '@/components/layouts/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/success',
      component: AuthenticatedLanding
    }
  ]
})
