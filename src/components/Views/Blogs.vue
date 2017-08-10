<template>
  <div>
    <h1>blog</h1>
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>
/**
 * <component></component>
 * Component
 * @desc description
 */
import BoxContainer from '@/components/layouts/boxcontainer'

export default {
  // Name
  name: 'blogs',

  components: {
    BoxContainer
  },
  // Props
  props: {},

  // Data
  data () {
    return {
      msg: 'Hello World',
      config: {
        events: {
          'froalaEditor.initialized': () => {
            console.log('initialized')
          }
        }
      },
      model: 'Blog Contents'
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
