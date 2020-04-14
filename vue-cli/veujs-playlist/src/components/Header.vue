<template>
  <div >
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
    </header>
  </div>
</template>

<script>


export default {
  props:{
      title : {
          type:String
      }
  },
  data () {
    return {
     // title : 'Vue Ninja!'
    }
  },
  methods:{
      changeTitle:function(){
      this.title="New Vue title"
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
