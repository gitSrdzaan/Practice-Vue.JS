import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes/routes.js'
/*import Ninjas from './ninjas.vue' //globaly registration

Vue.component('ninjas',Ninjas); //component global registration
*/
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes : Routes
});

Vue.filter('to-upper',function(value){
  return value.toUpperCase();
});

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
  render: h => h(App),
  router: router
})
