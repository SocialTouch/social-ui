import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './app.vue'
import router from './router/index'

import './assets/styles/kitchen-sink.css'
import highlight from 'highlight.js'
import marked from 'marked'
//import { SocialInstall } from 'social-ui'

Vue.use(VueResource)
Vue.use(VueRouter)
//Vue.use(SocialInstall)

marked.setOptions({
    highlight: function (code) {
        return window.highlight.highlightAuto(code).value
    }
})

window.highlight = highlight
window.marked = marked

router.start(App, 'app')
