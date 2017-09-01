<template lang='pug'>
  span
    label(for='SortBySelect') Sort by 
    select(id='SortBySelect', v-model='val', @change='change')
      option Repo name
      option(value='stargazers_count') Stars count
      option(value='open_issues_count') Open issues count
      option(value='updated_at') Updated date
</template>

<script>
import mixin from './InputMixin';

export default {
  name: 'SortBySelect',
  mixins: [mixin],
  methods: {
    change(evt) {
      const query = { ...this.$route.query };
      if (evt.target.value === 'Repo name') {
        delete query.sort;
      } else {
        query.sort = evt.target.value;
      }
      this.$router.replace({ append: true, query });
    },
  },
};
</script>

<style lang='sass' scoped>
  select
    margin-left: 4px
</style>
