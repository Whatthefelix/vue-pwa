<template>
  <div class="test">
    <div id="editor">
      <p></p>
    </div>
  </div>
</template>

<script>
import Quill from 'Quill'
import '../../assets/styles/quill.snow.css'

export default {
  // Name
  name: 'quill-editor',

  // Props
  props: {
    value: Object
  },

  // Data
  data () {
    return {
      quill: undefined
    }
  },

  // Computed
  computed: {},

  // Methods
  methods: {
    init () {
      this.quill = new Quill('#editor', {
        theme: 'snow'
      })

      this.quill.setContents(this.value)
      this.quill.setContents({ 'ops': [ { 'insert': 'test\nheyasdf;a' },
      { 'attributes': { 'header': 2 }, 'insert': '\n' }, { 'insert': 'asdfasdfasdfa' },
      { 'attributes': { 'header': 3 }, 'insert': '\n' } ] })

      this.quill.on('text-change', (delta, oldDelta, source) => {
        this.$emit('input', this.getContents())
      })
    },
    getContents () {
      return this.quill.getContents()
    }
  },
  // Watch
  watch: {
    value (newValue, oldValue) {
      this.quill.setContents(this.value)
    }
  },

  // Created
  created () {},

  // Mounted
  mounted () {
    this.init()
  }
}
</script>

<style scoped lang='scss'>
#editor {
  background: white;
  color: black;
}

</style>
