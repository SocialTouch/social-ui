import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/index': {
        name: 'index',
        component: (resolve) => {
            require(['../views/home.vue'], resolve)
        }
    },
    '/accordion': {
        name: 'accordion',
        component: (resolve) => {
            require(['../views/views/accordion.vue'], resolve)
        }
    },
    
})

//默认List主页
router.redirect({
    '/':"/index"
});

router.beforeEach(function (transition) {
    //transition.to.router.app.$Loading.start()
    transition.next()
})

router.afterEach((transition) => {
    //transition.to.router.app.$Loading.finish()
})

export default router