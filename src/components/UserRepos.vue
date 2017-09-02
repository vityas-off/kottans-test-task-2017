<template lang='pug'>
  section
    modal(v-if='showModal', @close='showModal = false')
      h1 {{ selectedRepo }}
      repo-details(:name='selectedRepo', :user='$route.params.user')
    div(v-if='count')
      transition-group(name='list-complete', class='cards', tag='ul', v-if='computedRepos.length')
        repo-card(
        v-for='repo in computedRepos',
        :info='repo',
        :key='repo.name',
        :emojis='emojis',
        @click.native.prevent='repoCardClicked(repo.name)',
        class='list-complete-item',
        @keyup.enter.native='repoCardClicked(repo.name)',
        )
      .nothing-found(v-else) No any repositories much applied filters.
      div(v-if='isLoading') Loading more repos. Please wait.
      template(v-if='!allReposLoaded && !isLoading')
        .load-more
          | Loaded {{ repos.length }} from {{ count }} total.
        button(@click='loadMoreRepos') >>> Load more
    .no-repos(v-if='count === 0') This user has no repositories.
</template>

<script>
import RepoCard from '@/components/RepoCard';
import Modal from '@/components/Modal';
import RepoDetails from '@/components/RepoDetails';
import bus from '@/components/Settings/EventBus';
import s from '@/components/Settings/defaults';
import api from '@/api';

export default {
  name: 'UserRepos',
  props: ['init', 'count'],
  components: { RepoCard, Modal, RepoDetails },
  data() {
    return {
      isLoading: false,
      repos: [],
      s,
      appliedFilters: [],
      sorting: 'None',
      showModal: false,
      selectedRepo: null,
      emojis: {},
    };
  },
  created() {
    bus.$on('updated', (settings) => {
      this.s = settings;
    });
    api.getEmojis().then((r) => {
      this.emojis = r;
    });
  },
  methods: {
    loadMoreRepos() {
      this.isLoading = true;
      const page = Math.ceil((this.repos.length / 30) + 1);
      api
        .getUserRepos(this.$route.params.user, page)
        .then((r) => {
          this.repos = this.repos.concat(r);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    repoCardClicked(name) {
      this.selectedRepo = name;
      this.showModal = true;
    },
    handleScroll() {
      if (
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
        !this.isLoading
      ) { this.loadMoreRepos(); }
    },
    filterByTopics(repo) {
      return Boolean(repo.topics.length);
    },
    filterByType(repo) {
      const type = repo.fork ? 'Forks' : 'Sources';
      return type === this.s.type;
    },
    filterByStars(repo) {
      return repo.stargazers_count >= this.s.starredMoreThan;
    },
    filterByIssues(repo) {
      return repo.open_issues_count > 0;
    },
    filterByDate(repo) {
      return new Date(repo.updated_at) > new Date(this.s.updatedAfter);
    },
    filterByLang(repo) {
      return this.s.selectedLang === repo.language;
    },
    applySort(repos) {
      return repos.sort((repo1, repo2) => {
        if (repo1[this.s.sorting] < repo2[this.s.sorting]) return 1;
        return -1;
      });
    },
  },
  computed: {
    computedRepos() {
      const filtered = this.repos.filter(repo =>
        this.appliedFilters.every(func => func(repo)),
      );
      const sorted =
        this.s.sorting === 'Repo name' ? filtered : this.applySort(filtered);
      return this.s.order === 'asc' ? sorted : sorted.reverse();
    },
    languages() {
      return this.repos.reduce((acc, repo) => {
        if (repo.language && !acc.includes(repo.language)) {
          acc.push(repo.language);
        }
        return acc;
      }, []);
    },
    allReposLoaded() {
      return this.repos.length === this.count;
    },
  },
  watch: {
    repos(data) {
      if (data.length === this.count) {
        document.removeEventListener('scroll', this.handleScroll);
      }
    },
    s: {
      handler() {
        const filters = [];
        if (this.s.hasOpenIssues) filters.push(this.filterByIssues);
        if (this.s.hasTopics) filters.push(this.filterByTopics);
        if (this.s.starredMoreThan > 0) filters.push(this.filterByStars);
        if (this.s.updatedAfter) filters.push(this.filterByDate);
        if (this.s.type !== 'All') filters.push(this.filterByType);
        if (this.s.selectedLang !== 'any') filters.push(this.filterByLang);
        this.appliedFilters = filters;
      },
      deep: true,
    },
    languages(newVal) {
      bus.$emit('languagesUpdated', newVal);
    },
  },
  mounted() {
    this.repos = this.init;
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang='sass' scoped>
  section
    border: 1px solid black
    max-width: 900px
    min-height: 100px
    padding: 8px
    box-sizing: border-box
    background: -webkit-linear-gradient(bottom, rgba(0,0,0,0)20%, rgba(0,0,0,.09) 100%)
    & div
      width: 100%
  .cards
    display: flex
    flex-wrap: wrap
    justify-content: center
    padding-left: 0
  .load-more
    margin-top: 20px
  .nothing-found
    margin-top: 30px
  h1
    margin: 20px
    margin-bottom: 0
  .no-repos
    margin-top: 30px
  .list-complete-item
    transition: all .7s
    margin-right: 10px
  .list-complete-enter, .list-complete-leave-to
    opacity: 0
    transform: translateY(30px)
  .list-complete-leave-active
    position: absolute
</style>
