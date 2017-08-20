//main.js  入口函数
import vueToast from './vue-toast.vue';

// var dom_hello = require('./hello');
// document.getElementById('app').appendChild(dom_hello());

// import Vue from 'vue'
// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })

// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(vueToast);
// }

// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})

Vue.component('vue-toast', Profile);