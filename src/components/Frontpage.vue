<style scoped src="./style1.css"></style>

<template>
<body>
    <loadingpageVue id="load"></loadingpageVue>
    <div id="body">
    <header>
       <img id="image1" src="./logo.png">
    </header>
    <article>
            <img id="image2" src="./grid.png">
    </article>
    <footer>
        <router-link to="/Menu">
            <button>Menu</button>
        </router-link>
        <router-link to="/classes">
            <button>Classes</button>
        </router-link>
        <router-link to="/reservation">
            <button id="boutton4">RESERVE UNE TABLE</button>
        </router-link>
    </footer>
    </div>
</body>
</template>

<script>
import loadingpageVue from './loadingpage.vue'

export default {
  components: {
    loadingpageVue
  }
}
</script>
