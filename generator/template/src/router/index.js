import Vue from "vue"
import Router from "vue-router"
import Layout from "@/layout/Base.vue"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: "/index",
          name: "Index",
          component: () =>
            import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
        },
      ],
    },
  ],
})

export default router
