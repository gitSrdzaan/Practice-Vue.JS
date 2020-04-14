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
  
  data () {
    return {
      ninjas : [
            { name :'Srdjan', age:23, show:false},
            { name :'Masa', age:21, show:false},
            { name :'Nikola', age:20, show:false},
            { name :'Ognjen', age:24, show:false},
            { name :'Haralampije', age:120, show:false},
      ]
    }
  }
  
}
</script>

<style scoped>
h1{
  color:green;
}
</style>
