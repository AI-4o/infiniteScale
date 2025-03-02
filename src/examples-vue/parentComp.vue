<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'
const message=ref('messagee')

const h = (e) => {
  console.log(e)
  message.value=e
}

</script>

<style>

</style>


<template>
  <ChildComp :message="message" @update="h" />
</template>