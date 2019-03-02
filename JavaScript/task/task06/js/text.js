
// //自定义过滤器
myApp.filter('txt',function () {
    return function (type) {
        switch (type) {
            case 0:
                type='首页 banner';
                break;
            case 1:
                type='找职位 banner ';
                break;
            case 2:
                type='找精英 banner';
                break;
            case 3:
                type='行业大图';
                break;

        }
        return type
    }
});
myApp.filter('toStatus',function () {
    return function (status) {
        switch (status) {
            case 1:
                status='草稿 ';
                break;
            case 2:
                status='上线';
                break;
        }
        return status
    }
});
//输出内容
myApp.controller('text',function ($scope,$http,$state,$stateParams) {
    console.log('123');
    $http({
        method:'GET',
        url:'carrots-admin-ajax/a/article/search'+'?'+$stateParams.page,
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        params:{
            page: $stateParams.page
        }
    })
        .then(function successCallback(txt,) {
            console.log(txt);
            let article=txt.data.data.articleList;
            $scope.text=article;
            let size=txt.data.data.size;//每页显示的数量
            console.log(size);
            let total=txt.data.data.total;//一共有多少条数据
            console.log(total);
            //一共有多少数据
            $scope.totalItems = total;
        });
    //当前页数
    $scope.currentPage = $stateParams.page;
    $scope.bigCurrentPage = 1;
    //页面改变执行的函数
    console.log($stateParams);
    $scope.change=function(){
        $state.go('background.page2',{page:$scope.currentPage});
        console.log($scope.currentPage,'mmm');
    };
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };
    //可选择的最大页数
    $scope.maxSize = 5;
    $scope.bigTotalItems = 21;


    //列表渲染

});


