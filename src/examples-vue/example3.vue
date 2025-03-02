<script setup>
import { ref, reactive, watch} from 'vue'

const inputValue = ref('')

const list = ref([
  {name: 'item1', done: false},
  {name: 'item2', done: true},
  {name: 'item3', done: false},
])

const handleClick = () => {
  list.value.push({name: inputValue.value, done: false})
  inputValue.value = ''
}

const handleChange = (item) => {
  item.done = !item.done
}

watch(list, (newVal) => { // the same as useEffect in react
  console.log(newVal)
})

</script>

<style>
</style>

<template>
  <div>

    <div>
      <input type="text" v-model="inputValue">
      <button @click="handleClick">Add</button>
    </div>

    <ul>
      <li v-for="item in list.filter(x  => !x.done)" :key="item.name">
        <input type="checkbox" :checked="item.done" @change="handleChange(item)">
        {{ item.name }}
      </li>
    </ul>

  </div>
</template>