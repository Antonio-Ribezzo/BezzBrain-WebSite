import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';




const router = createRouter({
    history: createWebHistory('/BezzBrain-WebSite/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/projects/project:id/:slug',
            name: 'project',
            component: SingleProjectPage,
            props: true,
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };