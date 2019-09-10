import Vue from 'vue'
import Router from 'vue-router'

import Hot from '@/views/hot'
import Movie from '@/views/movie'
import Top from '@/views/top'
import Detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', redirect: '/hot' },
    { path: '/hot', name: 'hot', component: Hot },
    { path: '/movie', name: 'movie', component: Movie },
    { path: '/top', name: 'top', component: Top },
    { path: '/detail/:id', name: 'detail', component: Detail }
  ]
})
