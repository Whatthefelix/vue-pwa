<template>
  <div>
    <h1>blog</h1>
    <form @submit.prevent="saveData">
      <quill-editor v-model="textContent">Hey</quill-editor>
      <!-- <quill-editor :value="textContent" @input="textContent = $event">Hey</quill-editor> -->
      <button>Submit</button>
    </form>
    {{blogContent}}

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
import QuillDeltaToHtml from 'quill-delta-to-html'

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
      textContent: undefined,
      cfg: undefined,
      blogContent: undefined
    }
  },
  // Methods
  methods: {
    saveData () {
      this.$db.ref('/blog').push({
        content: this.textContent
      })
    },
    retrieveData () {
      this.$db.ref('/blog').on('value', (snapshot) => {
        this.blogContent = snapshot.val()
        console.log(this.blogContent)
        console.log(snapshot.val())
      })
    }
  },
  // Computed
  computed: {
    formattedMessage () {
      if (this.textContent) {
        let cfg = {}
        let converter = new QuillDeltaToHtml(this.textContent.ops, cfg)
        return converter.convert()
      }
    }
  },

  // Watch
  watch: {},

  // Created
  created () {},

  // Mounted
  mounted () {
    this.retrieveData()
  }
}
</script>

<style scoped lang='scss'>
</style>
