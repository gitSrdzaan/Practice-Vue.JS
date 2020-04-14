<template>
    <div>
    <h1>List of ninjas</h1>
    <ul>
        <li v-for="ninja in ninjas">
            {{ninja}}
        </li>
    </ul>
    </div>
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

<style scoped> 
h1{
    color:blue;
}
</style>
