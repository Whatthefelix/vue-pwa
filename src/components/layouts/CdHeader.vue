<template>
  <header class="cd-header">
      <div class="cd-header__content">

        <div class="cd-header__logo-container">
          <img class="cd-header__logo" src="josh's image here" alt="Canada Drives Logo">
        </div>

        <div class="cd-header__nav-items">
          <div>{{msg}}</div>
          <div>{{msg}}</div>
          <div>{{msg}}</div>
          <div>{{msg}}</div>
        </div>

        <div class="mobile-nav-btn-container">
            <div class="mobile-nav__btn">
                <span class="mobile-nav__icon"></span>
            </div>
        </div>

      </div>
  </header>
</template>

<script>
/**
* <component></component>
* Component
* @desc description
*/
export default {
  // Name
  name: 'cd-header',

  // Props
  props: {},

  // Data
  data () {
    return {
      msg: 'Hello World'
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
.mobile-nav-btn-container {
    height: 0;
    background-color: #fff;
    -webkit-transition: height .1s ease-out;
    transition: height .1s ease-out;

    &__icon {
        background-color: #252525;
        position: absolute;
        display: block;
        height: 4px;
        width: 28px;
        transition: all .2s ease-out;

    &::before {
        content: "";
        bottom: 8px;
    }
    &::after {
        content: "";
        top: 8px;
    }
  }
}
@media screen and (min-width: 925px) {
// nuttin
}

.cd-header {

    background-color: #F7F7F7;
    border-bottom: 1px solid #DDDDDD;

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1000px;
        height: 60px;
        margin: auto;
    }

    &__logo {
        position: relative;
        top: -2px;
        width: 150px;
    }

    &__text {
        font-size: 18px;
    }
}
</style>
