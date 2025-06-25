import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/BezzBrain-WebSite/',
            name: 'home',
            component: HomePage
        },
        {
            path: 'BezzBrain-WebSite/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: 'BezzBrain-WebSite/projects/project:id/:slug',
            name: 'project',
            component: SingleProjectPage,
            props: true,
        },
        {
            path: 'BezzBrain-WebSite/about-me',
            name: 'about-me',
            component: AboutPage
        },
        {
            path: 'BezzBrain-WebSite/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: 'BezzBrain-WebSite/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };