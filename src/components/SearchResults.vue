<template lang='pug'>
  div
    div(v-if='users.length')
      .search-results
        router-link(
        v-for='user in users',
        :title='`${user.type} ${user.login}`',
        :key='user.login',
        :to='{ name: "UserDetails", params: { user : user.login }}',
        :class = '{organization: user.type === "Organization"}',
        )
          img(:src='user.avatar_url', :alt='`avatar of user ${user.login}`')
          span {{ user.login | crop }}
    #no-result(v-else-if='!users.length && isEmpty') Nothing found.
</template>

<script>
export default {
  props: ['users', 'isEmpty'],
  filters: {
    crop(text) {
      return text.length <= 16 ?
        text
        :
        `${text.substr(0, 14)}...`;
    },
  },
};
</script>

<style lang='sass' scoped>
  .search-results
    display: flex
    flex-wrap: wrap
    justify-content: center
    max-width: 900px
    margin: auto
    margin-top: 15px
    padding: 0
  a
    list-style: none
    width: 200px
    height: 50px
    border: 1px solid black
    margin: 2px
    display: flex
    cursor: pointer
    position: relative
    text-decoration: none
    transition: all .4s
    &:link, &:visited
      color: black
    &:hover
      background: black
      color: white
      & > img
        filter: invert(100%)
    & > img
      width: 50px
      height: 50px
      border-right: 1px solid silver
    & > span
      margin: auto
    &.organization::after
      content: 'org'
      position: absolute
      right: 2px
      color: grey
      font-size: 14px
  #no-result
    margin-top: 40px
</style>

