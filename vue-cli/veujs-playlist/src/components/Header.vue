<template>
  <div >
    <header>
        <h1>{{title}}</h1>
    </header>
  </div>
</template>

<script>


export default {
  
  data () {
    return {
      title : 'Vue Ninja!'
    }
  }
  
}
</script>

<style scoped>
header{
    background: lightgreen;
    padding:10px;
}
h1{
    text-align: center;
    color: wheat;
}
</style>
