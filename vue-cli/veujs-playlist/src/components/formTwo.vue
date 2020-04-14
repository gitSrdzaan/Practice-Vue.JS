<template>
  <div >
    <form>
        <input type="text" value="neki tekst form2"/>
        <h2>{{title | toUppercase}} </h2>
    </form>



  </div>
</template>

<script>



export default {
 
  data () {
    return {
        title : "Form title"
      
    }
  },
  methods:{
    
  },
  filters:{
      toUppercase : function(value){
          return value.toUpperCase();
      }
  },
  directives:{
      'rainbow':{
          bind(el,binding,vnode){
              el.style.color="#"+Math.random().toString.slice(2,8);
                if(binding.value == 'somethind'){

                }
                if(binding.arg == 'column'){

                }
          }
      }
  }
  
}
</script>

<style scoped>

</style>
