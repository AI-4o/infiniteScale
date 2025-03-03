<script setup>
import Home from "./views/home/Home.vue";
</script>

<template>
  <div id="app-root">
    <Home />
    <ParentComp />
  </div>
</template>

<style lang="scss" scoped>
#app-root {
  padding: 1rem;
}
</style>
