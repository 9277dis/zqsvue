import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Login",
        title:"登录",
        component: () => import("@/views/login/")
    },
    {
        path: "/regist",
        name: "Regist",
        component: () => import("@/views/regist/")
    },
    {
        path: "/index",
        name: "Layout",
        component: () => import("@/views/layout/"),
        children: [
            {
                path: "product",
                name: "Product",
                component: () => import("@/views/product/")
            },
            {
                path: "/detail",
                name: "Detail",
                component: () => import("@/views/product/detail/")
            },
            {
                path: "/order",
                name: "Order",
                component: () => import("@/views/order/")
            },
            {
                path: "cart",
                name: "Cart",
                component: () => import("@/views/cart/")
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router