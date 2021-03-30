<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term: {{ search }}</p>
    <div v-for="name in mathingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-core'
// @ is an alias to /src

export default {
  name: 'Home',
  setup() {
    /*const name = computed(() => {
      return 'Bjarnil'
    })*/
    const search = ref('')
    const names = ref(
      ["Bjarnil", "Eigol", "Astrid"]
    )

    const stopWatch = watch(search, () => {
      console.log("Watch function ran")
    })

    const stopEffect = watchEffect(() => {
      console.log("Watch effect function ran", search.value)
    })

    const mathingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return {
      mathingNames, search, handleClick
    }
  }
}
</script>
