<template>
  <div id="app">
    <loadingpageVue/>
    <router-view/>
  </div>
</template>

<script>
import loadingpageVue from './components/loadingpage.vue'

export default {
  name: 'App',
  components: {
    loadingpageVue
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
</style>
