<template>
  <div>
    <h1>blog</h1>
    <form>
      <quill-editor :value="textContent" @input="textContent = $event">Hey</quill-editor>
    </form>
    {{textContent}}
  </div>
</template>

<script>
/**
 * <component></component>
 * Component
 * @desc description
 */
import BoxContainer from '@/components/layouts/boxcontainer'
import QuillEditor from '@/components/inputs/quilleditor'

export default {
  // Name
  name: 'blogs',

  components: {
    QuillEditor,
    BoxContainer
  },
  // Props
  props: {},

  // Data
  data () {
    return {
      msg: 'Hello World',
      textContent: undefined
    }
  },
  // Methods
  methods: {},
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
