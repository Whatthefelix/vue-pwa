// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FirebaseSetup from './firebase'
import store from './store'
import Vuetify from 'vuetify'
import VueFroala from 'vue-froala-wysiwyg'

Vue.use(VueFroala)
Vue.use(Vuetify)
Vue.use(FirebaseSetup)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
