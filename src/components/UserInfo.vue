<template lang='pug'>
  section
    img(:src='info.avatar_url + "&s=160"', :alt='`${info.name}\'s avatar`')
    .wrapper
      h1 {{ info.type }} {{ info.name ? info.name : info.login }}
      .details
        span Location: {{ info.location ? info.location : 'unknown'}}
        address Email:
          a(v-if='info.email', :href='"mailto:" + info.email'
            )  {{ info.email }}
          span(v-else)  hidden
        span Public repos: {{ info.public_repos }}
</template>

<script>

export default {
  name: 'UserInfo',
  props: ['info'],
};
</script>

<style lang='sass' scoped>
  section
    border: 1px solid black
    max-width: 900px
    margin: 10px auto
    display: flex
    justify-content: space-between
    background: rgba(0,0,0,.05)
    & div
      width: 100%
  img
    margin: 5px
    flex-basis: 160px
    height: 160px
    flex-grow: 0
    flex-shrink: 0
  .details
    width: 100%
    display: flex
    flex-direction: column
    justify-content: flex-start
    & > *
      margin: 9px
    & *:last-child
      margin-top: 20px
      text-align: end
  h1
    margin-bottom: 5px
    font-size: 22px
  @media screen and (min-width: 500px)
    .wrapper
      margin-left: -100px
</style>
