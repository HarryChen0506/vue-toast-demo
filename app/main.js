
import Vue from 'vue';
import App from './App.vue';
import VueToastPlugin from './vue-toast-plugin.js';
//注意： 必须在实例化之前 调用注册组件
Vue.use(VueToastPlugin);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})



