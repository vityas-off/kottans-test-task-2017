<template lang='pug'>
  span
    input(
      id='HasTopicsCheckbox',
      type='checkbox',
      v-model='val',
      )
    label(for='HasTopicsCheckbox') Has topics
</template>

<script>
import mixin from './InputMixin';

export default {
  name: 'HasTopicsCheckbox',
  mixins: [mixin],
  watch: {
    val() {
      const query = { ...this.$route.query };
      if (this.val === true) {
        query.has_topics = true;
      } else {
        delete query.has_topics;
      }
      this.$router.replace({ append: true, query });
    },
  },
};
</script>
