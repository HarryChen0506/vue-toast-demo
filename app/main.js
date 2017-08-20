
import Vue from 'vue';
import App from './App.vue';
import MyPlugin from './vue-toast-plugin.js'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

Vue.use(MyPlugin)

