
// 插件

import VueToast from './vue-toast.vue'

let Toast = {};
Toast.install = function (Vue, opts){
    let options = {
        msg: '默认的提示语',
        duration: 2000,
        position: 'center',
        zIndex: 2000,
        color: '#fff',
        callback: null
    }
    Vue.prototype.$toast = function (methodOpts) {
        for(var key in methodOpts){
            options[key] = methodOpts[key]
        }
        // 逻辑...
        let toastConstructor = Vue.extend(VueToast);  //1、创建构造器，定义好提示信息的模板
        let toastComponent = new toastConstructor(); //创建实例，并挂在到虚拟dom里        
        toastComponent.msg = options.msg;
        toastComponent.position = options.position;
        toastComponent.zIndex = options.zIndex;
        toastComponent.color = options.color;

        document.body.appendChild(toastComponent.$mount().$el);

        setTimeout(function(){
            if(options.callback && typeof options.callback == 'function'){
                options.callback();
            }
            // document.body.removeChild(toastComponent.$mount().$el)
        },options.duration);

    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Toast);
}
export default Toast;