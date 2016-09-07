import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: (resolve) => {
            require(['../views/home.vue'], resolve)
        }
    },

    '/accordion': {//手风琴
        name: 'accordion',
        component: (resolve) => {
            require(['../views/views/accordion.vue'], resolve)
        }
    },
    '/actionsheet': {//手风琴
        name: 'actionsheet',
        component: (resolve) => {
            require(['../views/views/actionsheet.vue'], resolve)
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