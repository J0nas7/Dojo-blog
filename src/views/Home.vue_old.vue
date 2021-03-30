<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and I'm {{ age }} years old</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Increase Age</button>
    <button @click="age--">Decrease Age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
// @ is an alias to /src

export default {
  name: 'Home',
  setup() {
    const name = ref("Eigol")
    const age = ref(27)

    /*const p = ref('hello')
    const handleP = () => {
      console.log(p, p.value)
      p.value.classList.add("Test")
      p.value.textContent = "Hello Bjarnil"
    }*/

    const handleClick = () => {
      name.value = 'Bjarnil'
      age.value = 28
    }

    return {
      name, age // Not reflecive/reactive!!
      , handleClick
    }
  }
}
</script>
