import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Post from './views/PostVideo.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/postvideo',
            name: 'postvideo',
            component: Post,
        },
        {
            path: '/video/:videoID',
            name: 'showVideo',
            component: () => import('./views/ShowVideo.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
        },
        {
            path: '/movie',
            name: 'movie',
            component: () => import('./views/movie.vue'),
        },
        {
            path: '/movie/:movieID',
            name: 'showMovie',
            component: () => import('./views/showMovie.vue'),
        },
    ],
});