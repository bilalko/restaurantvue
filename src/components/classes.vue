<style scoped src="./styleclasse.css"></style>

<template>
<body>
    <loadingpageVue id="load"></loadingpageVue>
    <main id="body">
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
    <section>
        <article id="pancake">
            <div>
            <img src="./breakfast.png">
            <h1>Delicious breakfast</h1>
            <p>19 Juillet 2023</p>
            </div>
        </article>

        <article id="coffee">
            <div>
                <img src="./breakfast.png">
                <h1>Coffee Time</h1>
                <p>19 Avril 2023</p>
            </div>
        </article>
        <article id="honey">
            <div>
            <img src="./Italian.png">
            <h1>honey Style</h1>
            <p>1er Aout 2023</p>
            </div>
        </article>
        <article id="vegan">
            <div>
            <img src="./Dinner.png">
            <h1>Vegan Style</h1>
            <p>1er Septembre 2023</p>
            </div>
        </article>
    </section>
    </main>
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
