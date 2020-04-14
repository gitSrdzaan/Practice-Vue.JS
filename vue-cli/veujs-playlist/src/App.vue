<template>
  <div >
    <app-header  v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-main v-bind:ninjas="ninjas"></app-main>
    <app-footer v-bind:title="copyright"></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components:{
      'app-header':Header,
      'app-footer':Footer,
      'app-main' : Ninjas
  },
  data () {
    return {
      ninjas : [
            { name :'Srdjan', age:23, show:false},
            { name :'Masa', age:21, show:false},
            { name :'Nikola', age:20, show:false},
            { name :'Ognjen', age:24, show:false},
            { name :'Haralampije', age:120, show:false},
      ],
      title : 'Srdjan App!!!',
      copyright:  "Srdjan App Copyright"
    }
  },
  methods:{
    updateTitle:function(event){
      this.title = event;
    }
  }
  
}
</script>

<style scoped>
h1{
  color:green;
}
</style>
