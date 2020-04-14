<template>
  <div >
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './ninjas.vue'

export default {
  
  components : { //local component registration
        'ninjas' : Ninjas
  },
  data () {
    return {
      title : 'Srdjan App!'
    }
  }
  
}
</script>

<style scoped>
h1{
  color:green;
}
</style>
