import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/views/SignUp'
import SignIn from '@/components/views/SignIn'
import Firebase from 'firebase'
// import FirebaseSetup from '../firebase'
// import store from '../store'
import AuthenticatedLanding from '@/components/views/AuthenticatedLanding'
// import Hello from '@/components/layouts/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/success',
      name: 'success',
      component: AuthenticatedLanding

    },
    {
      path: '/signup',
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (Firebase.auth().currentUser || to.path === '/') {
    next()
  } else {
    console.log('no user')
    next('/')
  }
})

// const unsubscribe = Firebase.initializeApp(FirebaseSetup.firebaseConfig)
// .auth().onAuthStateChanged(() => {
//   new Vue({
//     router,
//     el: '#app',
//     template: '<router-view></router-view>'
//   })
// })

// unsubscribe()

export default router
