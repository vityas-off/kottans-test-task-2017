<template lang='pug'>
  li(tabindex='0', role='button', :class='{ fork : info.fork}')
    h1 {{ info.name }}
    .card-stats
      .lang {{ info.language ? info.language : 'none' }}
      .stars
        star
        span {{ info.stargazers_count | unitizeStars }}
    .desc(v-if='info.description', v-html='info.description')
    .updated-at
      time(:datetime='info.updated_at') updated {{ info.updated_at | timeAgo }}
</template>

<script>
import Star from '@/assets/icons/star.svg';
import unitize from 'unitize';
import timeago from 'timeago.js';

const timeagoInstance = timeago();

export default {
  props: ['info', 'emojis'],
  filters: {
    unitizeStars(starsCount) {
      return starsCount < 999 ?
        starsCount
        :
        unitize(starsCount).precision(1).toString(false);
    },
    timeAgo(time) {
      return timeagoInstance.format(time);
    },
  },
  components: { Star },
};
</script>

<style lang='sass' scoped>
  li
    display: flex
    flex-direction: column
    border: 1px solid black
    margin: 3px
    padding: 4px
    flex-basis: 270px
    cursor: pointer
    position: relative
    min-height: 90px
    max-width: 270px
    word-wrap: break-word
    &:hover
      background: black
      color: #e0e0e0
      & svg
        fill: #e0e0e0
  h1
    font-size: 16px
    margin-top: 12px
    margin-bottom: 7px
  svg
    margin: 0
    margin-right: 2px
  .stars
    display: flex
    margin-left: 5px
  .card-stats
    display: flex
    justify-content: space-between
    margin-bottom: 9px
    margin-left: 10px
    margin-right: 10px
  .lang
    margin-left: 5px
    font-style: italic
  .updated-at
    position: absolute
    bottom: 0
    right: 0
    padding: 4px
    border-top: 1px solid grey
    border-left: 1px solid grey
    background: rgba(0,0,0,.05)
  .desc
    margin-bottom: 28px
  .fork::after
    content: 'fork'
    position: absolute
    right: 5px
    font-size: 12px
</style>

