<template>
  <div >
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
    </header>
  </div>
</template>

<script>
import {bus} from '../main' //.. upper level

export default {
  props:{
      title : {
          type:String
      }
  },
  data () {
    return {
     title : 'Vue Ninja!'
    }
  },
  methods:{
      changeTitle:function(){
          //this.$emit('changeTitle','New Vue Title');
          this.title='BusEvent: New App Title';
          bus.$emit('titleChanged','BusEvent: New App Title');
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
    color: black;
}
</style>
