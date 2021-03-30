<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age}}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <p>{{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'
// @ is an alias to /src

export default {
  name: 'Home',
  setup() {
    const ninjaOne = ref({ name: "Bjarnil", age: 28 })
    const ninjaTwo = reactive({ name: "Eigol", age: 27 })

    const nameTwo = reactive('astrid') // primitive value doesn't work with reactive()

    const updateNinjaOne = () => {
      ninjaOne.value.age = 29
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 28
      nameTwo = "Eigol"
    }

    return {
      ninjaOne, updateNinjaOne, updateNinjaTwo, ninjaTwo, nameTwo
    }
  }
}
</script>
