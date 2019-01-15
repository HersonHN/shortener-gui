<template>
  <div class="shortener">
    <h1>URL shortener</h1>
    <p>
      type an url:
      <input type="text" v-model="long" />
      <button type="button" @click="shorten">Make shorter</button>
    </p>
    <p v-if="short">
      <a :href="short" target="_blank">{{short}}</a>
      <button type="button" name="button" @click="copy">Copy to clipboard</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
import { API } from '../config';

const URL_REGEX = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

export default {
  name: 'Shoertener',
  data: () => ({
    long: '',
    short: ''
  }),
  methods: {
    shorten() {
      let url = this.long;

      if (!validate(url)) {
        return alert('Invalid URL');
      }

      axios.post(`${API}/create-short-url`, { url }).then(response => {
          let url = response.data.url;
          this.short = `${API}/${url}`;
        })
    },

    copy() {
      copyToClipboard(this.short);
    }
  }
}

function validate(url) {
  return URL_REGEX.test(url);
}

function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

</script>

<style scoped>
  button {
    margin-left: .5rem;
  }
  input {
    width: 30rem;
  }
</style>
