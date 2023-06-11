import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppointmentsView from "@/views/appointments/AppointmentsView.vue";

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
            name: "appointments",
            component: AppointmentsView,
            children: [
                {
                    path: "nueva",
                    component: () =>
                        import("../views/appointments/NewAppointmentView.vue"),
                    children: [
                        {
                            path: "",
                            name: "new-appointment",
                            component: () =>
                                import(
                                    "../views/appointments/ServicesView.vue"
                                ),
                        },
                        {
                            path: "detalles",
                            name: "appointment-details",
                            component: () =>
                                import(
                                    "../views/appointments/AppointmentView.vue"
                                ),
                        },
                    ],
                },
            ],
        },
    ],
});

export default router;
