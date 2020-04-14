<template>
  <div id="ninjas" >
    <ul>
        <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
            <h2>{{ninja.name}}</h2>
            <h3 v-show="ninja.show">{{ninja.age}}</h3>

        </li>
    </ul>
    <button v-on:click="delNinja">Delete ninja</button>
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
  },
  methods:{
      delNinja:function(){
          this.ninjas.pop();
      }
  },
  //lifecycle hooks
  beforeCreate(){
    alert('before create');
  },
  created(){
    //fetch from database
    alert('created');
  },
  beforeMount(){
    alert('BEFORE MOUNT');
  },
  mounted(){
    alert('mounted');
  },
  beforeUpdate(){
    alert('before update');
  },
  updated(){
    alert('updated');
  }

  
}
</script>

<style scoped>
h1{
  color:green;
}
</style>
