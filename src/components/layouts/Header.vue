<template>
  <v-layout class="test">
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
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            <slot></slot>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="primaryDrawer.model = !primaryDrawer.model" v-if="primaryDrawer.type !== 'permanent'"></v-toolbar-side-icon>
      <v-toolbar-title>Vue PWA</v-toolbar-title>
    </v-toolbar>
  </v-layout>
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
