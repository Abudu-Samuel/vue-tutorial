import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css";
import VueRouter from "vue-router";
import CxltToastr from "cxlt-vue2-toastr";
import VueAxios from "vue-axios";
import axios from "axios";
import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import EditComponent from "./components/EditComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(CxltToastr);
Vue.config.productionTip = false;

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent
  },
  {
    name: "create",
    path: "/create",
    component: CreateComponent
  },
  {
    name: "edit",
    path: "/edit/:id",
    component: EditComponent
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount("#app");
