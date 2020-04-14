<template>
  <div id="ninjas" >
    <ul>
        <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
            <h2>{{ninja.name}}</h2>
            <h3 v-show="ninja.show">{{ninja.age}}</h3>

        </li>
    </ul>
  </div>
</template>

<script>


export default {
  props : {
      ninjas:{
          type:Array,
          required:true
      }
  },
  data () {
    return {
     
    }
  }
  
}
</script>

<style scoped>
h1{
  color:green;
}
</style>
