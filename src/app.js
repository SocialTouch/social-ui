import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './views/app.vue'
import './assets/styles/kitchen-sink.css'

Vue.use(VueRouter)

const router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition: true,
	transitionOnLoad: true,
	linkActiveClass:'nav-active'
})

require('./routers')(router)
router.start(App,'app')