import Vue from 'vue'
import App from './App.vue'
/*import Ninjas from './ninjas.vue' //globaly registration

Vue.component('ninjas',Ninjas); //component global registration
*/

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
