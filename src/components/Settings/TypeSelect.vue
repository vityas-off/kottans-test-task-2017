<template lang='pug'>
  span
    label(for='TypeSelect') Type
    select(id='TypeSelect', v-model='val', @change='change')
      option All
      option Forks
      option Sources
</template>

<script>
import mixin from './InputMixin';

export default {
  name: 'TypeSelect',
  mixins: [mixin],
  methods: {
    change(evt) {
      const query = { ...this.$route.query };
      if (evt.target.value === 'All') {
        delete query.type;
      } else {
        query.type = evt.target.value;
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

