<template>
  <div >
    <footer>
        <p>{{copyright}}</p>
    </footer>
  </div>
</template>

<script>


export default {
  
  data () {
    return {
      copyright : 'Copyright'
    }
  }
  
}
</script>

<style scoped>
footer{
    background-color: yellow;
}
p{
    text-align: center;
    color: lightskyblue;
}
</style>
