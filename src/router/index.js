import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Forgot from '../components/Forgot.vue'
import Register from '../components/Register.vue'




import store from "../store";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/login",
    children: [
      { name: "Login", path: "login", component: Login },
      { name: "Forgot", path: "forgot", component: Forgot },
      { name: "Register", path: "register", component: Register },

    ],
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import( '../views/Products.vue'),
    // children: [
    //   { name: "ProductList", path: "productList", component: ProductList },
    //   { name: "Opsi tambahan", path: "OpsiTambahan", component: OpsiTambahan },
    //   { name: "Kategori", path: "kategori", component: Kategori },

    // ]
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
