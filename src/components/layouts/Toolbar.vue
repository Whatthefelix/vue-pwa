<template>
  <v-toolbar>
    <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>New SF Admin Portal</v-toolbar-title>
  </v-toolbar>
</template>

<script>
/**
 * <component></component>
 * Component
 * @desc description
 */
export default {
  // Name
  name: 'toolbar',

  // Props
  props: {},

  // Data
  data () {
    return {
      dark: true,
      drawer: true
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
</style>
