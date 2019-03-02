//初始化页面
var app=angular.module('app',['"ui.router"']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/pagetab");

    $stateProvider
        .state('pageTab',{
            url:'/pageTab',
            templateUrl:'pageTab.html'
        })
        .state('pageTab.page1',{
            url:'/page1',
            templateUrl:'page1.html'
        })
        .state('pageTab.page2',{
            url:'/page2',
            templateUrl:'page2.html'
        })
        .state('pageTab.page3',{
            url:'/page3',
            templateUrl:'page3.html'
        })
        .state('pageTab.page4',{
            url:'/page4',
            templateUrl:'page4.html'
        })
});