import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', { // v-highlight
    bind(el, binding, vnode) {
        el.style.backgroundColor = 'green';
    }
}); 

new Vue({
  el: '#app',
  render: h => h(App)
})
