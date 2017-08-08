<template>
    <v-navigation-drawer absolute persistent :mini-variant.sync="mini" v-model="drawer" overflow>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <!-- <img src="https://randomuser.me/api/portraits/men/85.jpg" /> -->
            </v-list-tile-avatar>
            <v-list-tile-content>
              <!-- <v-list-tile-title>John Leider</v-list-tile-title> -->
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="navigation(item.route)">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
/**
 * <component></component>
 * Component
 * @desc description
 */
export default {
  // Name
  name: 'navigation',

  // Props
  props: {},

  // Data
  data () {
    return {
      dark: true,
      drawer: true,
      mini: false,
      items: [
        { title: 'Blogs', icon: 'cloud_queue', route: 'blogs' },
        { title: 'QTrade', icon: 'folder_open', route: 'qtrade' }
      ],
      primaryDrawer: {
        model: true,
        type: 'persistent',
        clipped: true
      }
    }
  },
  methods: {
    logOut () {
      this.$firebase.auth().signOut()
      this.$router.push('/')
    },
    navigation (route) {
      console.log('yo')
      console.log(route)
      this.$router.push(route)
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
  .test {
    background-color: blue;
    color: yellow;
  }
  li {
    list-style-type: none;
  }
</style>
