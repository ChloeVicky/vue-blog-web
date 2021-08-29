import Vue from "vue";
import VueRouter from "vue-router";

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