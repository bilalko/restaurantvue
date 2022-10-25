<style scoped src="./styleloadingpage.css"></style>

<template>
<body v-if="!isloaded">
    <div></div>
</body>
</template>

<script>
export default {
  data: () => {
    return {
      isloaded: false
    }
  },
  mounted () {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.isloaded = true
      }
    }
  }
}
</script>
