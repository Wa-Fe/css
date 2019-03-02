//表单验证
myApp.controller("myCtrl",function ($scope,$http,$state){
    $scope.point=function () {
        console.log('txt');
        var login=$scope.user.name;
        var pwd=$scope.user.password;
        //服务器请求
        $http({
            method:'POST',
            url:'carrots-admin-ajax/a/login',
            // contentType: 'application/x-www-form-urlencoded',
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            params: {
                name:login,
                pwd:pwd
            },
        })
            .then(function successCallback(test) {
                    console.log(test);
                    console.log(test.data.code);
                    if (test.data.code === -5004){
                        alert('用户不存在')
                    }else if (test.data.code === -5003) {
                        alert('密码错误')
                    }else {
                        $state.go ('background.welcome')
                    }

                },function errorCallback(){
                    alert('请重试')
                }

            )
    }
});