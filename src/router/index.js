import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReservacionesVista from "../views/reservaciones/ReservacionesVista.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/reservaciones",
            name: "reservaciones",
            component: ReservacionesVista,
            children: [
                {
                    path: "nueva",
                    component: () =>
                        import("../views/reservaciones/NuevaReservacion.vue"),
                    children: [
                        {
                            path: "",
                            name: "nueva-reserva",
                            component: () =>
                                import(
                                    "../views/reservaciones/ServicesView.vue"
                                ),
                        },
                        {
                            path: "detalles",
                            name: "detalles",
                            component: () =>
                                import(
                                    "../views/reservaciones/Detalles.vue"
                                ),
                        },
                    ],
                },
            ],
        },
    ],
});

export default router;
