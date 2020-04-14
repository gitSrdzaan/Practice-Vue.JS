<template>
  <div >
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './ninjas.vue'

export default {
  components : {
        'ninjas' : Ninjas
  },
  data () {
    return {
      title : 'Srdjan App!'
    }
  }
  
}
</script>

<style lang="scss">
</style>
