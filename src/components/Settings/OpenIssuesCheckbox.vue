<template lang='pug'>
  span
    input(
      id='OpenIssuesCheckbox',
      type='checkbox',
      v-model='val'
      )
    label(for='OpenIssuesCheckbox') Has open issues
</template>

<script>
import mixin from './InputMixin';

export default {
  name: 'OpenIssuesCheckbox',
  mixins: [mixin],
  watch: {
    val() {
      const query = { ...this.$route.query };
      if (this.val === true) {
        query.has_open_issues = true;
      } else {
        delete query.has_open_issues;
      }
      this.$router.replace({ append: true, query });
    },
  },
};
</script>
