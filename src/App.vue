<template>
  <v-app
    id="app"
    :dark="dark"
    :light="!dark"
  >
     <navigation></navigation>
     <toolbar></toolbar>
    <main>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs10>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
    <v-footer :absolute="footer.fixed">
      <span>© {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>


<script>
import Navigation from '@/components/layouts/Navigation'
import Toolbar from '@/components/layouts/Toolbar'

export default {

  name: 'app',
  components: {
    Navigation,
    Toolbar
  },
  data () {
    return {
      drawer: true,
      dark: true,
      footer: {
        fixed: false
      }
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.state.user
    },
    user () {
      return this.$store.state.user
    }
  },
  mounted () {
    this.$firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('update_user', user)
        this.$router.push({ name: 'success' })
      } else {
        this.$store.commit('update_user', user)
        this.$router.push({ name: 'signin' })
      }
    })
  }
}
</script>


<style>
  #app {
    border: 1px solid rgba(0, 0, 0, .1);
    overflow: hidden;
  }
  #app .container, #app {
    min-height: calc(100vh - 102px);
  }
</style>
