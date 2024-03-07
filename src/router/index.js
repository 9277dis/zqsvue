import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Index",
        component: () => import("@/views/login/")
    }, {
        path: "/regist",
        name: "Regist",
        component: () => import("@/views/regist/")
    }, {
        path: "/index",
        name: "Laylout",
        component: () => import("@/views/layout/"),
        children: [
            {
                path: "",
                name: "",
                component: () => import("@/views/navbar")
            }
        ]

    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
