<template>
  <div >
    <!--
    <app-header  v-bind:title="title" v-on:changeTitle="updateTitle($event)">
      <h2 slot="h2title">Slot header</h2>
      <p slot="text">Slot text</p>
    </app-header>
    <app-main v-bind:ninjas="ninjas"></app-main>
    <app-footer v-bind:title="copyright"></app-footer>-->
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="changeForm(1)">Show diffrent form</button>
    <button v-on:click="changeForm(2)">Show diffrent form</button>
    <router-view></router-view>
  </div>
</template>

<script>

/*import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'*/

import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  components:{
      /*'app-header':Header,
      'app-footer':Footer,
      'app-main' : Ninjas*/
      'form-one':formOne,
      'form-two':formTwo
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
      copyright:  "Srdjan App Copyright",
      component :'form-one'
    }
  },
  methods:{
    updateTitle:function(event){
      this.title = event;
    },
    changeForm:function(p){
      if (p == 1) {
        this.component = 'form-two';
      }
      else {
        this.component = 'form-one';
      }
    }
  }
  
}
</script>

<style scoped>
h1{
  color:green;
}
</style>
