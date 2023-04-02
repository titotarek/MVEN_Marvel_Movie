import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DetailPost from "../views/DetailPost.vue";
import AddPost from "../views/AddPost.vue";
import EditPost from "../views/EditPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },


  {
    path: "/add-post",
    name: "AddPost",
    component: AddPost,
  },

  {
    path: "/post-detail/:id",
    name: "DetailPost",
    component: DetailPost,
    props: true,
  },

  {
    path: "/edit-post/:id",
    name: "EditPost",
    component: EditPost,
    // props: true,
  },


  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
