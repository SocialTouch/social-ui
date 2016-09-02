import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    //默认
    '/': {
        name: 'index',
        component: (resolve) => {
            require(['../app.vue'], resolve)
        }
    },
    '/home': {
        name: 'home',
        component: (resolve) => {
            require(['../views/home.vue'], resolve)
        }
    },
    '/accordion': {
        name: 'accordion',
        component: (resolve) => {
            require(['../views/home.vue'], resolve)
        }
    },
    
})

router.beforeEach(function (transition) {
    //transition.to.router.app.$Loading.start()
    transition.next()
})

router.afterEach((transition) => {
    //transition.to.router.app.$Loading.finish()
})

export default router