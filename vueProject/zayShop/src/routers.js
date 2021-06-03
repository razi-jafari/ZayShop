import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Shop from './components/Shop.vue'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        }
    ]
})