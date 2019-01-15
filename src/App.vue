<template>
  <div class="global-wrapper" id="app">
    <div class="content">
      <Shortener />
    </div>
  </div>
</template>

<script>
import Shortener from './components/shortener';

export default {
  name: 'app',
  components: {
    Shortener
  }
}
</script>

<style lang="scss">
@import "assets/css/global.scss";
</style>
