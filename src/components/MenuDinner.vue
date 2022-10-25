<style scoped src="./style2dinner.css"></style>

<template>
<body>
    <div id="div1">
    <header>
       <img id="image1" src="./logo.png">
    </header>
    <article>
            <img id="image2" src="./gridmenu.png">
    </article>
    <section id="section1">
        <router-link to="/Menu">
            <button>Menu</button>
        </router-link>
        <router-link to="/classes">
            <button>Classes</button>
        </router-link>
        <router-link to="/reservation">
            <button id="boutton4">RESERVE UNE TABLE</button>
        </router-link>
    </section>
    </div>
    <div id="div2">
    <section>
        <nav>   <router-link to="/Menu">
            <a id="link1">Starters</a>
          </router-link>
        <router-link to="/menubreakfast">
            <a id="link2">Breakfast</a>
        </router-link>
        <router-link to="/menuDinner">
            <a id="link3">Dinner</a>
        </router-link>
            <router-link to="/menuDrinks">
            <a id="link4">Drinks</a>
          </router-link>
        </nav>
        <img src="./Dinner.png" id="starterss">
        <article id="articlemenu">
            <div id="starter">
            <div id="menu2">
            <img src="./italipizza.png" id="imagemenu1">
            <p>Pizza italien</p>
            <p id="tomato">{{prix1}}€</p>
            </div>
            <div id="menu3">
            <img src="./burger.png" id="imagemenu2">
            <p>Vegan Burger</p>
            <p id="Noodle">{{prix2}}€</p>
            </div>
            <fieldset>
                <legend>starter du jour </legend>
            <div id="menu4">
            <img src="./sea.png" id="imagemenu3">
            <p>Curry de la mer</p>
            <p id="pumpkin">{{prix3}}€</p>
            </div>
            </fieldset>
            </div>
        </article>
    </section>
    </div>
</body>
</template>

<script>
export default {
  data () {
    return {
      prix1: 19.99,
      prix2: 14.99,
      prix3: 14.99
    }
  }
}
</script>
