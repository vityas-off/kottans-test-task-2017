<template lang='pug'>
  header(:class='{ small: isSmall }')
    router-link(:to='{name: "FirstScreen" }')
      github-logo#logo(alt='GitHub octocat logo')
      h1 mini GitHub API client
</template>

<script>
import GithubLogo from '@/assets/logo.svg';

export default {
  name: 'Header',
  components: { GithubLogo },
  computed: {
    isSmall() {
      return this.$route.name === 'UserDetails';
    },
  },
};
</script>

<style lang='sass' scoped>
  header
    display: flex
    justify-content: center
  #logo
    width: 120px
    height: 120px
  a
    text-decoration: none
    &:link, &:visited, &:active
    color: #2c3e50
    fill: #2c3e50
    transition: all .4s ease
    &:hover
      fill: grey
      color: grey
  .small a
    display: flex
    justify-content: center
    vertical-align: center
    & #logo
      width: 45px
      height: 50px
    & h1
      display: inline
      margin: 10px
</style>
