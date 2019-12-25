<template>
  <div>
    <h1>Welcome to the Vue App!</h1>
    <Home />
  </div>
</template>

<script>
import Home from 'components/Home'

export default {
  name: "App",
  components: {
    Home
  }
}
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
}
</style>
