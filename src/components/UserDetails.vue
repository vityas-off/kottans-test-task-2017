<template lang='pug'>
main
  div(v-if='!isLoading')
    div(v-if='!error')
      user-info(:info='info')
      settings
      user-repos(:init='repos', :count='info.public_repos || 0')
    .error(v-else) {{ error.message }}
  spinner(v-else)
</template>

<script>
import UserInfo from '@/components/UserInfo';
import UserRepos from '@/components/UserRepos';
import Settings from '@/components/Settings';
import Spinner from '@/components/Spinner';
import api from '@/api';

export default {
  components: { UserInfo, UserRepos, Settings, Spinner },
  data() {
    return {
      info: {},
      error: null,
      repos: [],
      isLoading: true,
    };
  },
  methods: {
    fetchData() {
      this.isLoading = true;
      Promise.all([
        api.getUserInfo(this.$route.params.user),
        api.getUserRepos(this.$route.params.user),
      ])
        .then((r) => {
          [this.info, this.repos] = r;
          this.error = null;
        }).catch((err) => {
          this.error = err;
        }).finally(() => {
          this.isLoading = false;
        });
    },
  },
  watch: {
    $route(a, b) {
      if (a.params.user !== b.params.user) this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang='sass' scoped>
  main
    max-width: 900px
    margin: auto
</style>
