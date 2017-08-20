
<template>
  <div id="app">   
      
      <div @click="show()">显示toast</div>
      <div v-if="flag">
          <!--<vue-toast></vue-toast>-->
      </div>
      <div @click="tap()">点击</div>
  </div>
</template>

<script>
import VueToast from './vue-toast.vue'
export default {
  name: 'app',
  data: function (){
      return {
          flag: false
      }
  },
  methods: {
      show:function (){
          this.flag = true
      },
      tap: function (){
          this.$toast.show({
              msg: '好开心，第一个提示框',
              duration: 1000,
              position: 'bottom',
              zIndex: 1000,
              callback: function (){
                  alert('回调函数')
              }
          });
      }
  },
  components: {
      VueToast
  }
}
</script> 

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>