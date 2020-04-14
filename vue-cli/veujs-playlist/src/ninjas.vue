<template>
  <ul>
      <li v-for="ninja in ninjas">
          {{ninja}}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      ninjas : ['Srdjan','Masa','Nikola']
    }
  }
  
}
</script>

<style lang="scss">
</style>
