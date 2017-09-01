<template lang='pug'>
  span
    label(for='LangSelect') Language
    select(id='LangSelect', v-model='val', @change='change')
      option(value='any') Any
      option(v-for='lang in langs', :value='lang') {{ lang }}
</template>

<script>
import mixin from './InputMixin';

export default {
  name: 'LanguagesSelect',
  mixins: [mixin],
  props: ['value', 'langs'],
  methods: {
    change(evt) {
      const query = { ...this.$route.query };
      if (evt.target.value === 'any') {
        delete query.lang;
      } else {
        query.lang = evt.target.value;
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
