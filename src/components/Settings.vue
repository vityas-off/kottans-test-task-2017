<template lang='pug'>
  section
    type-select(v-model='s.type')
    languages-select(v-model='s.selectedLang', :langs='languages')
    starred-more-than-input(v-model='s.starredMoreThan')
    open-issues-checkbox(v-model='s.hasOpenIssues')
    has-topics-checkbox(v-model='s.hasTopics')
    updated-after-input(v-model='s.updatedAfter')
    sort-by-select(v-model='s.sorting')
    sort-order(v-model='s.order')
    button(@click='resetAll') Reset
</template>

<script>
import OpenIssuesCheckbox from '@/components/Settings/OpenIssuesCheckbox';
import StarredMoreThanInput from '@/components/Settings/StarredMoreThanInput';
import UpdatedAfterInput from '@/components/Settings/UpdatedAfterInput';
import HasTopicsCheckbox from '@/components/Settings/HasTopicsCheckbox';
import TypeSelect from '@/components/Settings/TypeSelect';
import LanguagesSelect from '@/components/Settings/LanguagesSelect';
import SortBySelect from '@/components/Settings/SortBySelect';
import SortOrder from '@/components/Settings/SortOrder';
import bus from '@/components/Settings/EventBus';
import defaults from '@/components/Settings/defaults';

export default {
  name: 'Settings',
  data() {
    return {
      s: { ...defaults },
      languages: [],
    };
  },
  created() {
    bus.$on('languagesUpdated', (langList) => {
      this.languages = langList;
    });
    if (Object.keys(this.$route.query).length) {
      if (this.$route.query.sort) {
        this.s.sorting = this.$route.query.sort;
      }
      if (this.$route.query.has_topics) {
        this.s.hasTopics = true;
      }
      if (this.$route.query.has_open_issues) {
        this.s.hasOpenIssues = true;
      }
      if (this.$route.query.lang) {
        this.s.selectedLang = this.$route.query.lang;
      }
      if (this.$route.query.updated_after) {
        this.s.updatedAfter = this.$route.query.updated_after;
      }
      if (this.$route.query.stargazers_count) {
        this.s.starredMoreThan = this.$route.query.stargazers_count;
      }
      if (this.$route.query.type) {
        this.s.type = this.$route.query.type;
      }
      if (this.$route.query.order) {
        this.s.order = 'desc';
      }
    }
  },
  components: {
    OpenIssuesCheckbox,
    StarredMoreThanInput,
    UpdatedAfterInput,
    HasTopicsCheckbox,
    TypeSelect,
    LanguagesSelect,
    SortBySelect,
    SortOrder,
  },
  watch: {
    s: {
      handler() {
        bus.$emit('updated', this.s);
      },
      deep: true,
    },
  },
  methods: {
    resetAll() {
      Object.keys(defaults).forEach((key) => {
        this.$set(this.s, key, defaults[key]);
      });
      this.$router.replace({ query: {} });
    },
  },
};
</script>

<style lang='sass' scoped>
  section
    background: #585757
    border: 1px solid black
    border-bottom: none
    color: white
    padding: 10px
    display: flex
    justify-content: center
    flex-wrap: wrap
    & > *
      margin: 0 10px 10px
</style>
