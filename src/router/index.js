import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/navbar/"),
        children: [
            {
                // 当访问根路径时，默认显示 Layout 组件
                path: "",
                name: "Layout",
                component: () => import("@/views/layout/")
            },
            {
                // 登录页面的路由
                path: "login",
                name: "Login",
                component: () => import("@/views/login/")
            },
            {
                // 注册页面的路由
                path: "regist",
                name: "Regist",
                component: () => import("@/views/regist/")
            },
            // 可以继续添加其他子路由...
        ]
    },
    // 如果需要其他独立路由，可以在这里继续添加...
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router