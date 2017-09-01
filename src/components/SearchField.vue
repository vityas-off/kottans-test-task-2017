<template lang='pug'>
  form(@submit.prevent='', role='search')
    .wrapper(:class='{"not-valid": !isValid}')
      label(for='search')
        search-icon#search-icon(
          alt='Lense icon.',
          :class='{focus: hasFocus, invalid: !isValid}'
        )
        input#search(
          type='search',
          placeholder='Search user or organization',
          :class='{invalid: !isValid}',
          aria-label='Search for an github user',
          @input='edited($event.target.value)',
          :value='initial',
          @focus='hasFocus = true',
          @blur='hasFocus = false',
          v-model='input',
          spellcheck='false'
        )
</template>

<script>
import SearchIcon from '@/assets/icons/search.svg';
import githubUsernameRegex from 'github-username-regex';

export default {
  name: 'SearchFiled',
  data() {
    return {
      hasFocus: false,
      input: '',
    };
  },
  computed: {
    isValid() {
      if (!this.input) return true;
      return githubUsernameRegex.test(this.input);
    },
  },
  methods: {
    edited(newVal) {
      if (this.isValid) this.$emit('edited', newVal);
    },
  },
  mounted() {
    this.input = this.initial;
  },
  components: { SearchIcon },
  props: ['initial'],
};
</script>

<style lang='sass' scoped>
  input
    min-width: 340px
    line-height: 30px
    font-size: 24px
    padding-left: 7px
    outline: none
    webkit-appearance: none
    border: none
    border-bottom: 2px solid #2c3e50
    background: transparent
    color: DarkSlateGray
    &:focus
      border-bottom: 2px solid #0074d9
    &.invalid
      border-bottom: 2px solid red
  #search-icon
    height: 25px
    width: 25px
    padding: 4px
    background: #2c3e50
    border-bottom: 2px solid black
    cursor: pointer
    &.focus
      border-bottom: 2px solid #0074d9
      background: #0074d9
    &.invalid
      border-bottom: 2px solid red
      background: red
  ::placeholder
    color: lightslategrey
  label
    box-sizing: border-box
    display: flex
    justify-content: center
  .wrapper::after
    content: ' '
    display: block
    margin-left: 220px
    margin-top: 3px
    color: red
    height: 30px
  .not-valid::after
    content: 'name not valid'
  ::-webkit-search-cancel-button
    -webkit-appearance: none
    height: 30px
    width: 30px
    background: url("../close.svg") no-repeat 
    background-size: contain
    cursor: pointer
</style>

