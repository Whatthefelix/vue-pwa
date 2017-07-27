<template>
  <div :class="size" class="box-container">
    <slot></slot>
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
  name: 'box-container',

  // Props
  props: {
    size: String // small (400px) || medium (800px) || large (1100px)
  },

  // Data
  data () {
    return {
      msg: ' World'
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
