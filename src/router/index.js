import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import User from "../views/User.vue";
import RecoverPassword from "../views/RecoverPassword.vue";
import api from "../../services/api";

function validate(to, from, next) {
  if (localStorage.getItem("token") != undefined) {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    api
      .post("/user/validate", {}, req)
      .then((res) => {
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("id", res.data.id);
        next();
      })
      .catch(() => next("/login"));
  } else {
    next("/login");
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/welcome",
    name: "User",
    component: User,
    beforeEnter: validate,
  },
  {
    path: "/recoverpassword",
    name: "RecoverPassword",
    component: RecoverPassword,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
