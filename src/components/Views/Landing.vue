<template>

  <box-container size="medium">
      <input type="text" class="username-input" v-model="email">
      <input type="password" class="password" v-model="password">
      <button type="submit" @click="signup">Button</button>
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
      email: undefined,
      passowrd: undefined,
      displayName: undefined
    }
  },
  methods: {
    async signup () {
      console.log('attempting signup..')
      try {
        const response = await this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        const user = this.$firebase.auth().currentUser
        user.updateProfile({
          displayName: this.displayName
        })
        console.log(response)
      } catch (error) {
        console.warn(error)
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
</style>
