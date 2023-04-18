import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Portofolio from "@/views/portofolio.vue";
import contact from "@/views/contact.vue";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/portofolio",
        name: "Portofolio",
        component: Portofolio,
    },
    {
        path: "/contact",
        name: "contact",
        component: contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;