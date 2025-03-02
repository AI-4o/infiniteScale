<script setup>
import ChildComp from './ChildComp.vue'

const h = (e) => {
  console.log(e)
}

</script>

<template>
  <ChildComp message="Hello from parent component" @update="h" />
</template>


<style>

</style>