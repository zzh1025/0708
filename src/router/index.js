import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = ()=>import("../pages/login.vue")
const index = ()=>import("../pages/index.vue")
const welcome = ()=>import("../pages/welcome.vue")
const manage = ()=>import("../pages/manage.vue")
const pass= ()=>import("../pages/pass.vue")
const teacher= ()=>import("../pages/teacher.vue")
const banner= ()=>import("../pages/banner.vue")
const water= ()=>import("../pages/water.vue")
const repair= ()=>import("../pages/repair.vue")
const home= ()=>import("../pages/home.vue")


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: 'welcome',
          name: 'welcome',
          component: welcome
        },
        {
          path: 'manage',
          name: '管理员管理',
          component: manage
        },
        {
          path: 'pass',
          name: '修改密码',
          component: pass
        },
        {
          path: 'home',
          name: '家政管理',
          component: home
        },
        {
          path: 'repair',
          name: '维修管理',
          component: repair
        },
        {
          path: 'water',
          name: '水站管理',
          component: water
        },
        {
          path: 'banner',
          name: 'banner管理',
          component: banner
        },
        {
          path: 'teacher',
          name: '家教管理',
          component: teacher
        },
        {
          path: '',
          redirect: 'welcome'
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
