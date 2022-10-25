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
    setTimeout(() => {
      this.isloaded = true
    }, 1500)
  }
}
</script>
