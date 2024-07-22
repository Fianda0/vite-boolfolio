import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./View/AppHome.vue";
import AppAbout from "./View/AppAbout.vue";
import AppContacts from "./View/AppContacts.vue";
import AppProjects from "./View/AppProjects.vue";
import SingolCard from "./View/SingolCard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/project/:id',
            name: 'project',
            component: SingolCard
        },
    ]
})

export { router };