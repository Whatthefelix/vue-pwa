import Vue from 'vue'
import Firebase from 'firebase'

export default class FirebaseSetup {
  static firebaseConfig = {
    apiKey: 'AIzaSyCHoQu_65EZw15KHhQtX724MlnrCbrIL6E',
    authDomain: 'vue-pwa-test.firebaseapp.com',
    databaseURL: 'https://vue-pwa-test.firebaseio.com',
    projectId: 'vue-pwa-test',
    storageBucket: 'vue-pwa-test.appspot.com',
    messagingSenderId: '1021107624074'
  };
  static install () {
    const firebaseApp = Firebase.initializeApp(this.firebaseConfig)
    const db = firebaseApp.database()

    Object.defineProperty(Vue.prototype, '$firebase', {
      get () {
        return firebaseApp
      }
    })

    Object.defineProperty(Vue.prototype, '$db', {
      get () {
        return db
      }
    })
  }
}
