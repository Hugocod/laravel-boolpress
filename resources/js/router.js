import Vue from "vue";
import VueRouter from "vue-router";
import PostComponent from "./components/PostComponent";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{ path: "/", name: "home", component: PostComponent }],
});

export default router;
