import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManagerComponent from '../components/proveedores/ManagerComponent.vue'
import Registrar from '../components/proveedores/Registrar.vue'
import RegistrarProveedor from '../components/proveedores/ResgistrarProveedoresComponent.vue'
import LoginView from '../views/LoginView.vue';
import ClientesView from '../views/ClientesView.vue';
import VisitasView from '../views/VisitasView.vue';
import VentasView from '../views/VentasView.vue';
import PresupuestosView from '../views/PresupuestosView.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: { hideNav: true }
  },
  {
    path: '/registrar-proveedor',
    name: 'registrar-proveedor',
    component: RegistrarProveedor
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/manager-proveedores',
    name: 'manager-proveedores',
    component: ManagerComponent
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: Registrar
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientesView
  },
  {
    path: '/visitas',
    name: 'visitas',
    component: VisitasView
  },
  {
    path: '/ventas',
    name: 'ventas',
    component: VentasView
  }
  ,
  {
    path: '/presupuestos',
    name: 'presupuestos',
    component: PresupuestosView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
