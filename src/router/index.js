import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("@/views/login/") // 确保路径和文件名正确
    },
    {
        path: "/regist",
        name: "Regist",
        component: () => import("@/views/regist/") // 确保路径和文件名正确
    },
    {
        path: "/index",
        name: "Layout",
        component: () => import("@/views/layout/"), // 确保路径和文件名正确
        children: [
            {
                path: "product", // 子路由路径不以 / 开头
                name: "Product",
                component: () => import("@/views/product/") // 确保路径和文件名正确
            },
            {
                path: "detail", // 子路由路径不以 / 开头
                name: "Detail",
                component: () => import("@/views/product/detail/") // 确保路径和文件名正确
            },
            {
                path: "order", // 子路由路径不以 / 开头
                name: "Order",
                component: () => import("@/views/order/") // 确保路径和文件名正确
            },
            {
                path: "cart", // 子路由路径不以 / 开头
                name: "Cart",
                component: () => import("@/views/cart/") // 确保路径和文件名正确
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