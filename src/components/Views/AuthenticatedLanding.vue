<template>

  <box-container size="medium">
    <h1>Hey you're logged in</h1>
  </box-container>
</template>

<script>
import BoxContainer from '@/components/layouts/boxcontainer'

export default {
  // Name
  name: 'component',
  components: {
    BoxContainer
  },
  // Props
  props: [
  ],

  // Data
  data () {
    return {
      msg: '',
      displayName: undefined
    }
  },
  methods: {
    async signup () {

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
