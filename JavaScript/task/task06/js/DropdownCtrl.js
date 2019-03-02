//过滤器
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
//下拉菜单选择器
myApp.controller('serach',function ($scope,$http,$stateParams,$state,) {
    // $scope.timeTwo=new Date();
    // $scope.endAt=Date.parse($scope.timeTwo).toString();
    // console.log( $scope.endAt);
    //获取状态字段
    var test1=$stateParams.status;
    $scope.selectedSite=test1;
    //获取类型字段
    $scope.selectedSiteOne=$stateParams.type;

    //当前页数
    $scope.currentPage=$stateParams.page;

//获取创建时间字段
    var tt2=$stateParams.startAt;
    var tt2=+tt2;
$scope.timeOne=tt2;
//获取更新时间字段
//     var tt1=$filter('date')($stateParams.endAt,"yyyy/MM/dd");

    var tt1=$stateParams.endAt;
    var tt1=+tt1;
    $scope.timeTwo=tt1;


//下拉菜单部分
$scope.sites=[
    {id:'1',name:'草稿'},
    {id:'2',name:'上线'},
];
$scope.sitesOne=[
    {id:'0',name:'首页banner'},
    {id:'1',name:'找职位banner'},
    {id:'2',name:'找精英banner'},
    {id:'3',name:'行业大图'},
];
//点击清楚按钮所有的初始化
    $scope.reset=function(){
        $scope.selectedSite= '';
        $scope.selectedSiteOne = '';
        $scope.timeTwo= '';
        $scope.timeOne= '';
        $state.go('background.page2',{
            page:'',
            status:'',
            type:'',
            startAt:'',
            endAt:''
        })
    };

//点击按钮进行搜索
    $scope.search=function () {

        //从页面获取创建时间
        var txtOne=$scope.timeOne;
        //从页面获取更新时间
        var txtTwo=$scope.timeTwo;
    console.log($stateParams.startAt);
    console.log(typeof $stateParams.endAt);
    console.log(typeof $scope.timeTwo);
    var txtFour=+$stateParams.startAt;
    var txtThree=+$stateParams.endAt;

        // if (txtOne === undefined){
        //     console.log($stateParams.startAt);
        //     $scope.startAt='';
        //     console.log('xxx')
        // }else if (txtFour ===$scope.timeOne){
        //     $scope.startAt='';
        //
        // }else {
        //     console.log();
        //     $scope.startAt=$scope.timeOne.getTime();
        //     console.log('zzz')
        //
        // }
        if (txtOne === undefined || txtOne==="" ||isNaN(txtOne)){
            $scope.startAt=''
        } else{
            if (txtOne === txtFour){
                $scope.startAt=txtFour
            } else {
                console.log(txtOne);
                $scope.startAt=$scope.timeOne.getTime();
            }
        }


    if (txtTwo === undefined || txtTwo===''||isNaN(txtTwo)){
        console.log($stateParams.endAt);
        $scope.endAt='';
        console.log('xxx')
    }else {
        //获取输入的值

        //获取传递过来的值
        if (txtTwo === txtThree){
            $scope.endAt=txtThree;
        } else {
            $scope.endAt=$scope.timeTwo.getTime();
        }
    }

    // console.log($scope.startAt,$scope.startAt);
    // console.log(isNaN($scope.timeOne)?'':$scope.timeOne);
        $state.go('background.page2',{
            page:$scope.currentPage,
            status:$scope.selectedSite,
            type:$scope.selectedSiteOne,
            startAt:isNaN($scope.timeOne)?'':$scope.startAt,
            endAt:isNaN($scope.timeTwo)?'':$scope.endAt,
            // startAt:$scope.startAt ||'',
            // endAt:$scope.startAt||''
        });


    };



    //时间选择器
    $scope.today = function() {
        $scope.dt = new Date();
    };
    // $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

    //列表渲染
    $http({
        method:'GET',
        // url:'carrots-admin-ajax/a/article/search'+'?search'+$stateParams.page+$stateParams.status+$stateParams.type+$stateParams.startAt+$stateParams.endAt,
        url:'carrots-admin-ajax/a/article/search',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        params:{
            page: $stateParams.page,
            status:$stateParams.status,
            type:$stateParams.type ,
            startAt:$stateParams.startAt ,
            endAt:$stateParams.endAt ,
        }
    })
        .then(function successCallback(txt,) {
            let article=txt.data.data.articleList;
            $scope.text=article;
            let size=txt.data.data.size;//每页显示的数量
            let total=txt.data.data.total;//一共有多少条数据
            //一共有多少数据
            $scope.totalItems = total;
        });



    //当前页数
    $scope.currentPage=$stateParams.page;
    //  $stateParams.page= $scope.currentPage;
    // $scope.bigCurrentPage = 1;
    //页面改变执行的函数
    $scope.change=function(){
        $state.go('background.page2',{page:$scope.currentPage});
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
});