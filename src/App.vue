<template>
  <div class="global-wrapper" id="app">
    <div class="content">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
@import "assets/css/global.scss";
</style>
