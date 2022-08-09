import Vue from 'vue'
import App from './App.vue'
import Xbox from './components/Xbox'
import Office from './components/Office.vue'
import Shopping from './components/Shopping'
import Mcrosoft from './components/Mcrosoft'
import Sourface from './components/Sourface'
import Windows from './components/Windows.vue'
import Support from './components/Support.vue'
import Denglu from './components/Denglu'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import { use } from 'vue/types/umd'
import VueRouter from 'vue-router'
// import VueResource from 'vueResource'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)
// Vue.use(VueResource)
const router = new VueRouter({
  routes:[
    {path:"/",component:Mcrosoft},
    {path:"/Xbox",component:Xbox},
    {path:"/Office",component:Office},
    {path:"/Shopping",component:Shopping,beforeEnter:(to,from,next)=>{
        if(to.path=='/Denglu'){
          next()
        }else{
          alert('请先登录')
          next('/Denglu')
        }
    }
  },
    {path:"/Sourface",component:Sourface},
    {path:"/Windows",component:Windows},
    {path:"/Support",component:Support},
    {path:"/Denglu",component:Denglu},
  ],
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
