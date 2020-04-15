import Vue from 'vue'
import VueRouter from 'vue-router'
  // @ts-ignore
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "cars" */ '../pages/Cars.vue')
  },
  {
    path: '/cars/:carId',
    name: 'CarsDetails',
    //@ts-ignore
    component: () => import(/* webpackChunkName: "car-details" */ '../pages/CarDetails.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
        // @ts-ignore
      return import(/* webpackChunkName: "about" */ '../pages/About.vue')
    }
  },
  {
    path: '/CreateCar',
    name: 'CreateCar',
    //@ts-ignore
    component: () => import(/* webpackChunkName: "create-car" */ '../pages/CreateCar.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
