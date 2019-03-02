//上传图片界面
myApp.controller('upload',function ($scope,FileUploader,$http,$stateParams) {
    var E = window.wangEditor;
    var editor1 = new E('#div1', '#div2');  // 两个参数也可以传入 elem 对象，class 选择器
    editor1.create();

    //下拉菜单的内容
    // $scope.selectAll = [
    //     {id: '0', name: '首页banner'},
    //     {id: '1', name: '找职位banner'},
    //     {id: '2', name: '找精英banner'},
    //     {id: '3', name: '行业大图'},
    // ];
    //上传需要用到的代码
    var uploader = $scope.uploader = new FileUploader({
        url: 'carrots-admin-ajax/a/u/img/task/'
    });
    //上传数据
    $scope.uploading=function(){

        //请求的所有内容
            //名称
        $stateParams.title=$scope.formData.username;
        //类型
        $stateParams.type=$scope.formData.selectOne;
       //类型为行业大图时的选项
        $stateParams.industry=$scope.formData.selectTwo;
        //url衔接


     //  $http({
     //      method:'POST',
     //      url:'carrots-admin-ajax/a/u/article',
     //      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
     //
     // })

    };


    // FILTERS
    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        // console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
        // console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
        // console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
        // console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
        // console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        // console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
        // console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        // console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
        // console.info('onCompleteItem', fileItem, response, status, headers);
        // console.info(response.message);
        $scope.txtOne=response.data.url;
        $stateParams.url=angular.copy($scope.txtOne);
        // console.log($scope.txtOne);
        // formData.rul=angular.copy(response.data.url);
        // $scope.start=function () {
        //     formData.rul=response.data.url;
        // }
    };
    uploader.onCompleteAll = function() {
        // console.info('onCompleteAll');
    };

    // console.info('uploader', uploader);
});