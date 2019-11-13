// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store"

router.beforeEach((to, from, next) => {
  var user = sessionStorage.getItem("user");
  if(user||to.path=="/login"){
    next()
  }else{
    next("/login")
  }
})

Vue.use(ElementUI)
Vue.config.productionTip = false

import "./assets/css/reset.css"
import axios from "axios"
import Filter from "./filter/index.js"

Vue.prototype.$axios = axios
for(var i in Filter){  
  Vue.filter(i,Filter[i])
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
