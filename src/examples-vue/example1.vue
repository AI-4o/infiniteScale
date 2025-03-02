<script setup>
import { ref, reactive} from 'vue'

const counter = reactive({count: 0})
const message = ref('Hello World!')
const onClick = ()  => {
  message.value = 'carmensita';
  counter.count++;
}


const className = ref('btn-primary')

const changeClass = () => { // channge the class of the buttoin based on the value of the counter
  counter.count++;
  counter.count % 2 === 0 ? className.value = 'btn-primary' : className.value = 'btn-secondary';
}

</script>

<style>

.btn-primary {
  background-color: blue;
  color: white;
}
.btn-secondary {
  background-color: red;
  color: white;
}

</style>


<template>
  <button @click="onClick">{{message}}</button>
  <p>Count is: {{ counter.count }}</p>



<!-- bindare attributi dinamici -->
<button :class="className" @click="changeClass">
  <span>Click me to change the class</span>
</button>





</template>