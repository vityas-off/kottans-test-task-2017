<template lang='pug'>
  div
    spinner(v-if='!info')
    .content(v-else-if='!error')
      template(v-if='!info.error')
        div
          a(:href='info.url', target='_blank') Open on GitHub
        div(v-if='info.forkedFrom') Forked from: 
          a(:href='info.forkedFrom.url', target='_blank') {{ info.forkedFrom.name }}
        hr
        template(v-if='info.contributors.length')
          h2 Top contributors
          table
            tr
              th
              th username
              th contributions
            tr(v-for='c in info.contributors')
              td
                img(:src='c.avatar_url', :alt='`${c.login} avatar`')
              td
                router-link(:to='{ name: "UserDetails", params: { user : c.login } }',
                v-if='c.login !== $route.params.user') {{ c.login }}
                span(v-else) {{ c.login }}
              td {{ c.contributions }}
                .progress(:style='{ width: c.contributions / totalContribs + "%"}')
        template(v-if='info.languages.length')
          h2 Most used languages
          table
            tr
              th Language
              th Code size
            tr(v-for='lang in info.languages')
              td {{ Object.keys(lang)[0] }}
              td {{ Object.values(lang)[0] | bytesToSI }}
                .progress(:style='{ width: Object.values(lang)[0] / totalLangs + "%"}')
        template(v-if='info.pulls.length')
          h2 Most popular PRs
          ul
            li(v-for='pr in info.pulls')
              a(:href='pr.html_url', target='_blank') {{ pr.title }}
      .error(v-else) {{ error.message }}
</template>

<script>
import Spinner from '@/components/Spinner';
import api from '@/api';
import unitize from 'unitize';

export default {
  props: ['name', 'user'],
  components: { Spinner },
  data() {
    return {
      info: null,
      error: null,
    };
  },
  created() {
    api.getRepoDetails(this.name, this.user)
      .then((r) => {
        this.info = r;
        this.error = null;
      }).catch((err) => {
        this.error = err;
      });
  },
  filters: {
    bytesToSI(num) {
      return unitize.bytes(num).toString();
    },
  },
  computed: {
    totalLangs() {
      return (this.info.languages
        .map(lang => Object.values(lang)[0])
        .reduce((a, b) => a + b, 0)) / 100;
    },
    totalContribs() {
      return this.info.contributors
        .reduce((a, b) => a + b.contributions, 0) / 100;
    },
  },
};
</script>

<style lang='sass' scoped>
  div
    margin-bottom: 4px
  h2
    font-size: 18px
  .content
    margin: 15px
    margin-top: 5px
    min-width: 400px
  table
    margin: auto
    min-width: 90%
    border-collapse: collapse
  td, td
    border: 1px solid black
    position: relative
    height: 30px
  .progress
    position: absolute
    top: 0
    left: 0
    background: rgba(0,255,0,.1)
    height: 100%
  img
    vertical-align: top
    width: 30px
    height: 30px
  li
    text-align: left
</style>

