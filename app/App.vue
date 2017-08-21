
<template>
  <div id="app">         
      <!--<div @click="show()">显示toast提示</div>-->
      <div @click="tap()">点击</div>
      <div>hhhahh</div>
  </div>
</template>

<script>
// import VueToast from './vue-toast.vue'
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
          console.log(123);
          this.$toast.show({
              msg: '好开心，第一个提示框',
              duration: 3000,
              position: 'bottom',
              zIndex: 3000,
              callback: function (){
                //   alert('回调函数')
                console.log('回调函数')
              }
          });
      }
  }
}
</script> 

    <!-- <style lang="scss">
        #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        }
    </style> -->