<template lang='pug'>
  #app
    app-header
    transition(appear, name='router-fade', mode='out-in')
      router-view
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  name: 'app',
  components: { AppHeader },
};
</script>

<style lang='sass'>
  html
    margin-left: calc(100vw - 100%)
  body
    background: #fafafa
    min-width: 400px
  label,
  input,
  select
    vertical-align: -webkit-baseline-middle
  a
    color: #0074d9
  a:hover
    color: firebrick
    cursor: pointer
  .emoji
    width: 22px
    height: 22px
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 15px
    &::-webkit-scrollbar
      width: 5px
      height: 5px
    &::-webkit-scrollbar-button
      width: 0px
      height: 0px
    &::-webkit-scrollbar-thumb
      background: #e1e1e1
      border: 0px none #ffffff
      border-radius: 40px
    &::-webkit-scrollbar-thumb:hover
      background: #ffffff
    &::-webkit-scrollbar-thumb:active
      background: #000000
    &::-webkit-scrollbar-track
      background: #666666
      border: 0px none #ffffff
      border-radius: 17px
    &::-webkit-scrollbar-track:hover
      background: #666666
    &::-webkit-scrollbar-track:active
      background: #333333
    &::-webkit-scrollbar-corner
      background: transparent
  .error
    color: red
    margin-top: 40px
  .router-fade-enter-active, .router-fade-leave-active
    transition: opacity .4s ease
  .router-fade-enter, .router-fade-leave-to
    opacity: 0
</style>
