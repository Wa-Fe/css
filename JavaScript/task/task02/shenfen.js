// //点击下方按钮背景图片切换
// $(document).ready(function () {
//     $(".foot").click(function() {
//             $(".main-box-two").css("background-image","url(image/task03-center.png)");
//
//             },
//         function () {
//             $(".main-box-two").css("background-image","url(image/task03-jiaose.png)")
//
//         }
//     )
// });
//页面加载完就执行
// window.onload=function () {
//     var txt1="查看1号身份";
//     document.getElementById("txt").innerText=txt1;
// }

// 初始化添加文字
document.getElementById("txt1").innerText="查看1号身份";


//点击事件
function next() {
    //点击次数
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
        sessionStorage.clickcount = 3;
    }
    //输出点击次数
    // console.log(sessionStorage.clickcount);
    var num=sessionStorage.clickcount;
    var num1=Math.ceil(num/2);
    var num2=Math.floor(num/2);
    item=num1-2;
    if (item == all.length-1){
        document.getElementById("txt1").innerText="法官页面";
        document.getElementById("back").style.backgroundImage="url(image/task03-jiaose.png)";
        document.getElementById("back").style.backgroundPosition="50% 30%";
        document.getElementById("txt2").innerText="角色："+all[item];
       document.getElementById("txt").onclick=null;//移除原先的按钮事件

        //添加新的按钮事件
       document.getElementById("txt").onclick=function () {
           start()
       }



    }
   else if (num%2===1){
        // document.getElementById("txt1").innerText="法官页面";
        document.getElementById("back").style.backgroundImage="url(image/task03-jiaose.png)";
        document.getElementById("back").style.backgroundPosition="50% 30%";
        document.getElementById("txt1").innerText="隐藏身份并传递给"+num1+"号";

        document.getElementById("txt2").innerText="角色："+all[item]
    }
    else {
        // console.log(num+"为偶数");
        document.getElementById("num1").innerText=num1;
        document.getElementById("back").style.backgroundImage="url(image/task03-center.png)";
        document.getElementById("txt1").innerText="查看"+num2+"号身份";
        document.getElementById("txt2").innerText="";

    }



}
    //页面加载完获取函数
    window.onload=function () {
        var name = JSON.parse(localStorage.getItem("key"));
        all=name;

        console.log(all);
    };
    //新的按钮事件：跳转网页
    function start() {
        window.location="faguan.html"
    }
