module.exports = function(router){
    //路由表
    router.map({
        //默认
        '/':{
            name:'index',
            component: require('./views/app.vue')

        }
    });


    //默认
    router.redirect({
        '/':"/index"
    });


    //注册路由切换前
    router.beforeEach(function (transition) {
        transition.next();

    });


    //注册路由切换后
    router.afterEach(function (transition) {
        //console.log('成功浏览到: ' + transition.to.path)
    });

};
