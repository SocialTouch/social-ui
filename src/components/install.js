import loadingBarInstall from './plugin/loading-bar'

/*eslint-disable*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.SocialUI = factory())
}(this, function () {
/*eslint-enable*/
    'use strict'
    function install (Vue, options = {
        LoadingBar: true
    }) {
        Vue.use(require('vue-animated-list'))

        let $root = null

        Vue.mixin({
            created () {
                if (!$root) {
                    if (this === this.$root) {
                        SocialInit(this)
                    }
                }
            }
        })

        const SocialInit = (vm) => {
            $root = vm

        
            if (options.LoadingBar) {
                loadingBarInstall(Vue, vm)
            }


        }
    }
    return install
}))
