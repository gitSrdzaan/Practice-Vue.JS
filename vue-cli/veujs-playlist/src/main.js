import Vue from 'vue'
import App from './App.vue'
/*import Ninjas from './ninjas.vue' //globaly registration

Vue.component('ninjas',Ninjas); //component global registration
*/

export const bus = new Vue();
Vue.directive('rainbow',{
    bind(el,binding,vnode){
        el.style.color="#"+Math.random().toString.slice(2,8);
        if(binding.value == 'somethind'){

        }
        if(binding.arg == 'column'){
          
        }

    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
