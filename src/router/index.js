import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Register from "../views/Register";
import ForgotPassword from "../views/ForgotPassword";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName:"home" */ '../views/Home.vue'),
        meta: {
            title: "Home"
        }
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: () => import(/* webpackChunkName:"blogs" */ '../views/Blogs.vue'),
        meta: {
            title: "Blogs"
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login"
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "Register"
        }
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: {
            title: "Forgot Password"
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | TravelBlogs`;
    next();
})

export default router;