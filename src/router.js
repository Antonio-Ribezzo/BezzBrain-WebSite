import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';
import AboutPage from './pages/AboutPage.vue';



const router = createRouter({
    history: createWebHistory(),
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
            path: '/projects/:id',
            name: 'project',
            component: SingleProjectPage
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutPage
        }
    ]
    });
    export { router };