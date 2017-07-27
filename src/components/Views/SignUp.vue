<template>

  <box-container size="medium">
    <h1>Signup</h1>
      <v-text-field
       label="Email"
       class="email-input"
       v-model="email"
      >
      </v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        class="password"
        type="password"
      >
      </v-text-field>
      <input type="text" class="username-input" v-model="email">
      <input type="password" class="password" v-model="password">
      <v-btn
      type="submit"
      dark
      primary
      >
      Sign Up
      </v-btn>
  </box-container>
</template>

<script>
import BoxContainer from '@/components/layouts/boxcontainer'

export default {
  // Name
  name: 'sign-up',
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
      password: undefined
    }
  },
  methods: {
    async signup () {
      console.log('attempting signup..')
      try {
        const response = await this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        console.log(response)
        this.$router.push('/success')
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
