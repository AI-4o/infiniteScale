<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update'])

const handleUpdate = (newValue) => {
  emit('update', newValue)
}
</script>

<template>
  <div>
    <p>Child component received: {{ message }}</p>
    <button @click="handleUpdate('Updated from child')">Update Parent</button>
  </div>
</template>

<style scoped>
div {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>