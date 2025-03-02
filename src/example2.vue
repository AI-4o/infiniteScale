<script setup>
// CONTROLLED INPUT

import { ref, reactive } from "vue";

const value = ref("");

const handleInput = (event) => {
  value.value = event.target.value;
};
</script>

<style></style>

<template>
  <input :value="value" @input="handleInput" />
  <p>Value is: {{ value }}</p>

  <!-- controllo input fatto più velocemnete con v-model -->
  <input type="text" v-model="value" />

  <p v-if="value.length > 0">conditionally rendered</p>
  <p v-else>not rendered</p>
</template>
