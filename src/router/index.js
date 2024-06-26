import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Login",
        title: "登录",
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
                path: "/index",
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
                path: "/cart",
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
import store from "@/store";
router.beforeEach((to, from, next) => {
    console.log(to.path)
    const shouldProceed = () => {
        // if (to.path === '/index' && from.path === '/') {
        //     return true;
        // }
        return to.path === '/' || to.path === '/regist' || store.getters.loginUserId;
    };

    if (shouldProceed()) {
        next();
    } else {
        next(`/?redirect=${encodeURIComponent(to.fullPath)}`);
    }
});
export default router