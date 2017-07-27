<template>
  <box-container size="medium">
    <h1>Sign In</h1>
    <v-text-field
      label="Email"
      class="email-input"
      v-model="email"
    >
    </v-text-field>
    <v-text-field
      label="Password"
      class="password"
      v-model="password"
    >
    </v-text-field>
    <v-btn primary dark @click="signIn">Log in</v-btn>
  </box-container>
</template>

<script>
import BoxContainer from '@/components/layouts/boxcontainer'

export default {
  // Name
  name: 'sign-in',
  components: {
    BoxContainer
  },
  // Props
  props: {},

  // Data
  data () {
    return {
      email: undefined,
      password: undefined
    }
  },
  // Methods
  methods: {
    signIn () {
      this.$firebase.auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$store.commit('authStateChange')
        this.$router.push('/success')
      }).catch(() => {

      })
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
