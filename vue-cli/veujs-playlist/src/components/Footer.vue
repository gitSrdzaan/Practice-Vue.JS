<template>
  <div >
    <footer>
        <p>{{copyright}} ++ {{title}}</p>
    </footer>
  </div>
</template>

<script>
 import {bus} from '../main' //.. upper level
 
export default {
  props :{
      title:{
          type:String
      }
  },
  data () {
    return {
      copyright : 'Copyright'
    }
  },
  created(){
      bus.$on('titleChanged',(data)=>{
          this.title = data;
      })
  }
  
}
</script>

<style scoped>
footer{
    background-color: yellow;
}
p{
    text-align: center;
    color:red;
}
</style>
