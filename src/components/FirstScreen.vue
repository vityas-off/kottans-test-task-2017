<template lang='pug'>
  div
    search-field(@edited='searchEdited', :initial='$route.query.search')
    div(v-if='!error')
      spinner.spinner(v-if='isLoading')
      search-results(v-else, :users='users', :isEmpty='Boolean(searchQuery)')
    .error(v-else) {{ error }}
</template>

<script>
import api from '@/api';
import debounce from 'lodash.debounce';
import SearchField from '@/components/SearchField';
import SearchResults from '@/components/SearchResults';
import Spinner from '@/components/Spinner';

export default {
  name: 'FirstScreen',
  data() {
    return {
      searchQuery: '',
      isLoading: false,
      users: [],
      error: null,
    };
  },
  mounted() {
    if (this.$route.query.search) {
      this.searchQuery = this.$route.query.search;
      this.search();
    }
  },
  components: { SearchField, SearchResults, Spinner },
  methods: {
    searchEdited(newVal) {
      this.searchQuery = newVal;
      this.$router.replace({
        query: this.searchQuery ? { search: this.searchQuery } : {},
      });
    },
    search: debounce(async function s(query) {
      if (query === '') {
        this.reset();
        return;
      }
      try {
        const res = await api.searchUsers(query);
        this.error = null;
        this.users = res;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    }, 1000),
    reset() {
      this.users = [];
      this.error = null;
      this.isLoading = false;
    },
  },
  watch: {
    searchQuery(newVal) {
      this.isLoading = true;
      if (newVal === '') this.reset();
      this.search(newVal);
    },
  },
};
</script>

