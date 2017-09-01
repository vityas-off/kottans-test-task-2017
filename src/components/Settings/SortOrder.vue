<template lang='pug'>
  span
    label(for='SortOrder') Sort order
    select(id='SortOrder', v-model='val', @change='change')
      option asc
      option desc
</template>

<script>
import mixin from './InputMixin';

export default {
  name: 'Sortorder',
  mixins: [mixin],
  methods: {
    change(evt) {
      const query = { ...this.$route.query };
      if (evt.target.value !== 'desc') {
        delete query.order;
      } else {
        query.order = evt.target.value;
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
