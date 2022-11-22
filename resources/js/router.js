import Vue from "vue";
import VueRouter from "vue-router";

import PostComponent from "./components/PostComponent";
import HomeComponent from "./components/pages/HomeComponent";
import AboutComponent from "./components/pages/AboutComponent";
import NotFoundComponent from "./components/pages/NotFoundComponent";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", name: "home", component: HomeComponent },
        { path: "/pages/posts", name: "posts", component: PostComponent },
        { path: "/pages/about", name: "about", component: AboutComponent },
        { path: "/*", name: "NotFound", component: NotFoundComponent },
    ],
});

export default router;
