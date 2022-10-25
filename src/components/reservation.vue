<style scoped src="./style3.css"></style>

<template>
<body>
    <div id="div1">
    <header>
       <img id="image1" src="./logo.png">
    </header>
    <article>
            <img id="image2" src="./gridv3.png">
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
        <img src="./Frame 17.png" id="image3">
        <form id="form" @submit="checkForm" method="POST">
            <label for="Nom">Nom</label>
            <input type="text" name="Nom" placeholder="Nom" id="name" >
            <label for="nombre">nombre d'invités</label>
            <input type="number" name="nombre" placeholder="nombre d'invités" id="nombre">
            <label for="Date">Date</label>
            <input type="date" name="Date" placeholder="27/10/2022" id="date">
            <label for="Time">Heure</label>
            <input type="time" name="Time" placeholder="14:20" id="time">
            <button id="submit" type="submit" v-on:click='demo'>RESERVE UNE TABLE</button>
        </form>
    </section>
    </div>
</body>
</template>

<script>
export default {
  methods: {
    demo: () => {
      console.log('salut')
    },
    checkForm: (e) => {
      let form1 = document.getElementsByTagName('form')[0]
      e.preventDefault()
      const formData = new FormData(form1)
      const data = Object.fromEntries(formData)
      if (document.getElementById('name').value.length === 0) {
        document.getElementById('name').style.borderColor = 'red'
      }
      if (document.getElementById('nombre').value.length === 0) {
        document.getElementById('nombre').style.borderColor = 'red'
      }
      if (document.getElementById('date').value.length === 0) {
        document.getElementById('date').style.borderColor = 'red'
      }
      if (document.getElementById('time').value.length === 0) {
        document.getElementById('time').style.borderColor = 'red'
      }
      if (document.getElementById('date').value.length > 0 && document.getElementById('nombre').value.length > 0 && document.getElementById('name').value.length > 0 && document.getElementById('time').value.length > 0) {
        document.getElementById('time').style.borderColor = 'white'
        document.getElementById('name').style.borderColor = 'white'
        document.getElementById('date').style.borderColor = 'white'
        document.getElementById('nombre').style.borderColor = 'white'
        fetch('https://getform.io/f/26d53f50-b0a9-4a46-b864-e0ed53a98d1e', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      }
    }
  }
}
</script>
