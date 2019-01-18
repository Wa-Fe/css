//初始化天数为第一天
var z=1;
// sessionStorage.setItem('day','i');


//页面加载完成获取其中的身份
$(function () {
        // sessionStorage.setItem('state',1);
        sessionStorage.setItem('day',z);
        // var all5= new Array(3);
        // sessionStorage.setItem('all2',JSON.stringify(all2));
        all5 = JSON.parse(localStorage.getItem("key"));
        // all2 = JSON.parse(localStorage.getItem("key"));
        // all1 = JSON.parse(localStorage.getItem("key"));
        sessionStorage.setItem('all3',JSON.stringify(all5));
        sessionStorage.setItem('all1',JSON.stringify(all5));
        sessionStorage.setItem('all2',JSON.stringify(all5));
    var name = JSON.parse(localStorage.getItem("key"));
    all=name;
    num=1;
    numone=0;
    console.log(all);
       for (var i=0;i<all.length;i++){
           add()
        }
    }
    );

//定义一个方法添加方块,写法为es6的模版字符串
function add() {
    var test=`
 
        <div class="main-box">
                <div class="main-box-one">
                <span>${all[numone++]}</span></div>
                <div class="main-box-two">
                 <span>${(num++)+"号"}</span>
                </div>
             
          </div>
        
       `;
    $('main').append(test)//在main添加test

}
//点击返回
$("#leftphoto").click(function () {
    confirm("确定要返回吗？")
});
//点击关闭
$("#rightphoto").click(function () {
    confirm("确定要关闭吗？")
});
//点击开始游戏
$('#button').click(function () {
    window.location='task04.html'
});