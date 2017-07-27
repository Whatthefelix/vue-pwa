import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/views/SignUp'
import SignIn from '@/components/views/SignIn'
import AuthenticatedLanding from '@/components/views/AuthenticatedLanding'
// import Hello from '@/components/layouts/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/success',
      component: AuthenticatedLanding
    },
    {
      path: '/signup',
      component: SignUp
    }
  ]
})
