import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'login',
        component: () =>
            import ('./components/login.vue')
    },
    {
        path: '/LoadingScreen',
        name: 'LoadingScreen',
        component: () =>
            import ('./components/LoadingScreen.vue')
    },
    {
        path: '/page_03',
        name: 'page_03',
        component: () =>
            import ('./components/page_03.vue')
    },
    {
        path: '/page_04',
        name: 'page_04',
        component: () =>
            import ('./components/page_04.vue'),

    },
    {
        path: '/page_05',
        name: 'page_05',
        component: () =>
            import ('./components/page_05.vue')
    },
    {
        path: '/page_06',
        name: 'page_06',
        component: () =>
            import ('./components/page_06.vue')
    },
    {
        path: '/page_07',
        name: 'page_07',
        component: () =>
            import ('./components/page_07.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router