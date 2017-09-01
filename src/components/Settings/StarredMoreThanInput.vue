<template lang='pug'>
  span
    label(for='StarredMoreThan') Starred more than
    input(
      id='StarredMoreThan',
      type='number',
      min='0',
      v-model.number='val',
      @input='change',
      )
</template>

<script>
import mixin from './InputMixin';

export default {
  name: 'StarredMoreThanInput',
  mixins: [mixin],
  methods: {
    change(evt) {
      const query = { ...this.$route.query };
      if (evt.target.value === '0') {
        delete query.stargazers_count;
      } else {
        query.stargazers_count = evt.target.value;
      }
      this.$router.replace({ append: true, query });
    },
  },
};
</script>

<style lang='sass' scoped>
  input
    margin-left: 4px
    padding-left: 2px
    width: 56px
    background: lightgrey
</style>

