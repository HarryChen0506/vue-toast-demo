
<template>
    <div>       
        <div class="vue-toast" :class="position" v-bind:style="{ color: color,zIndex: zIndex }">{{msg}}</div>
    </div>   
</template>
<style>
    .vue-toast {
        position: fixed;        
        left: 50%;
        margin-left: -70px;
        padding: 10px 20px;
        font-size: 14px;
        line-height: 20px;
        width: 100px;
        background: #000;
        color: #fff;
        border-radius: 10px;
        text-align: center
    }
    .top {
        top: 20%;
    }
    .center {
        top: 50%;
    }
    .bottom {
        bottom: 20%
    }
</style>
<script>
export default {
    name: 'vueToast',
    data () {
        return {
            msg: '',
            position:'',
            zIndex:'',
            color: ''
        }
    },
    mounted(){
       
    },
    methods:{

    }
}
</script>