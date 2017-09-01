<template lang='pug'>
  app-spinner(alt='Loading...')
</template>

<script>
import AppSpinner from '@/assets/spinner.svg';

export default {
  name: 'Spinner',
  components: { AppSpinner },
};
</script>

<style lang='sass' scoped>
  svg
    margin-top: 60px
    width: 100px
    height: 100px
</style>
