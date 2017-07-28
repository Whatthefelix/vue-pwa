<template>
  <div>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :persistent="primaryDrawer.type === 'persistent'"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      absolute
      overflow
      enable-resize-watcher
    >
      <v-list-tile v-show="$store.state.user">
        <v-list-tile-content>
          <v-list-tile-title>
            <v-btn medium @click="logOut">Log Out</v-btn>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="primaryDrawer.model = !primaryDrawer.model" v-if="primaryDrawer.type !== 'permanent'"></v-toolbar-side-icon>
      <v-toolbar-title>Vue PWA</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
/**
 * <component></component>
 * Component
 * @desc description
 */
export default {
  // Name
  name: 'header-component',

  // Props
  props: {},

  // Data
  data () {
    return {
      dark: true,
      primaryDrawer: {
        model: true,
        type: 'persistent',
        clipped: true
      }
    }
  },
  methods: {
    logOut () {
      this.$firebase.auth().signOut()
      this.$router.push('/')
    }
  },
  // Computed
  computed: {},

  // Watch
  watch: {},

  // Created
  created () {},

  // Mounted
  mounted () {}
}
</script>

<style scoped lang='scss'>
  .test {
    background-color: blue;
    color: yellow;
  }
</style>
