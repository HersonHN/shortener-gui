<template>
  <section class="top-hits">
    <router-link to="/">Shortener</router-link>
    <h1>Top Hits</h1>
    
    <article class="hit" v-for="(hit, n) in topHits" :key="hit.short">
      <div class="number">
        {{n + 1}}
      </div>

      <h3>{{hit.title}} <small>{{hit.long}}</small></h3>

      <div>
        <a target="_blank" :href="url(hit.short)">{{ url(hit.short) }}</a> |
        <span>{{hit.count}} hits</span>
      </div>
    </article>

  </section>
</template>

<script>
import gql from 'graphql-tag'
import { API } from '../config';

export default {
  name: 'TopHits',
  
  apollo: {
    topHits: gql`query { topHits { long, title, short, count } }`
  },

  methods: {
    url(id) {
      return `${API}/${id}`;
    }
  }
}
</script>

<style lang="scss" scoped>
  small {
    font-size: .5rem;
    font-weight: normal;
    color: #aaa;
  }
  .hit {
    padding-bottom: 1rem;
    h3 { margin-bottom: .5rem; }
    .number {
      display: block;
      float: left;
      width: 2rem;
      text-align: center;
      padding: .5rem 0;
      margin-right: 1rem;
      margin-bottom: 1rem;
      border: 1px solid #999;
    }
  }
</style>
