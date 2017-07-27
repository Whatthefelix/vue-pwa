<template>
  <v-app
    id="app"
    :dark="dark"
    :light="!dark"
    standalone
  >
    <v-navigation-drawer
      v-show="isAuthenticated"
      v-model="primaryDrawer.model"
      :persistent="primaryDrawer.type === 'persistent'"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      absolute
      overflow
      enable-resize-watcher
    >
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="primaryDrawer.model = !primaryDrawer.model" v-if="primaryDrawer.type !== 'permanent'"></v-toolbar-side-icon>
      <v-toolbar-title>Vue PWA</v-toolbar-title>
    </v-toolbar>
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
export default {

  name: 'app',
  data: () => ({

    dark: true,
    primaryDrawer: {
      model: true,
      type: 'persistent',
      isActive: false
    },
    footer: {
      fixed: false
    }
  }),
  computed: {
    isAuthenticated () {
      return this.$store.user.loggedIn
    }
  },
  mounted () {
    this.$firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log('user is still logged in')
        this.$store.user.loggedIn
      } else {
        this.$route.push('/signin')
        // No user is signed in.
        console.log('user is ded')
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
