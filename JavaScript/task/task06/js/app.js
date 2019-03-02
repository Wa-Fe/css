//创建路由页面
var myApp =angular.module("myApp", ["ui.router",'ngMessages','ui.bootstrap','angularFileUpload']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/login");

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "login.html",
        })
        .state("background", {
            url: "/background",
            templateUrl: "background.html",

        })
        .state('background.welcome',{
            url: '/welcome',
            templateUrl:'welcome.html'
        })
        .state('background.page1',{
            url: '/page1',
            templateUrl:'page1.html'
        })
        .state('background.page2',{
            url: '/page2?page&status&type&startAt&endAt',
            templateUrl:'page2.html',



        })
        .state('background.page3',{
            url: '/page3',
            templateUrl:'page3.html',

        })
        .state('background.upload',{
            url:'/upload',
            templateUrl:'upload.html',
            }

        )



});

