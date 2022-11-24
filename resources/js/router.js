import Vue from "vue";
import VueRouter from "vue-router";

import PostComponent from "./components/PostComponent";
import HomeComponent from "./components/pages/HomeComponent";
import PostsIndexComponent from "./components/PostsIndexComponent";
import AboutComponent from "./components/pages/AboutComponent";
import NotFoundComponent from "./components/pages/NotFoundComponent";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", name: "home", component: HomeComponent },
        { path: "/posts", name: "posts-index", component: PostsIndexComponent },
        { path: "/pages/posts", name: "posts", component: PostComponent },
        { path: "/pages/about", name: "about", component: AboutComponent },
        { path: "/*", name: "NotFound", component: NotFoundComponent },
    ],
});

export default router;
