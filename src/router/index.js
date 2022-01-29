import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../pages/Main.vue";
import Catalog from "../pages/Catalog.vue";
import Delivery from "../pages/Delivery.vue";
import Contact from "../pages/ContactPage.vue";
import Product from "../pages/ProductPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: Main,
  },
  {
    path: "catalog",
    name: "CatalogPage",
    component: Catalog,
  },
  {
    path: "delivery",
    name: "DeliveryPage",
    component: Delivery,
  },
  {
    path: "contact",
    name: "ContactPage",
    component: Contact,
  },
  {
    path: "product/:id",
    name: "ProductPage",
    component: Product,
  },
  {
    path: "*",
    redirect: {
      name: "MainPage",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
