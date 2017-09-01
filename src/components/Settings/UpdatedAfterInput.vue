<template lang='pug'>
  span
    label(for='UpdatedAfterInput') Updated After 
    input(
      id='UpdatedAfterInput',
      type='date',
      v-model='val',
      @change='change',
      )
</template>

<script>
import mixin from './InputMixin';

export default {
  name: 'UpdatedAfterInput',
  mixins: [mixin],
  methods: {
    change(evt) {
      const query = { ...this.$route.query };
      if (!evt.target.value) {
        delete query.updated_after;
      } else {
        query.updated_after = evt.target.value;
      }
      this.$router.replace({ append: true, query });
    },
  },
};
</script>

<style lang='sass' scoped>
  input
    width: 130px
    background: lightgrey
</style>
