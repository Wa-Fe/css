//初始获取页面内容
var bbq=0;
$(function () {

    var name = JSON.parse(localStorage.getItem("key"));
        all=name;
        all1=[...all];
        num=1;
        numone=0;
        for (var i=0;i<all.length;i++){
            add()
        }

        all3 = JSON.parse(sessionStorage.getItem('all2'));
        console.log(all3);
        for (var z=0;z<all3.length;z++){
            if (all3[z] === "死亡") {
                console.log(z);
                $('.home').find('.main-box .main-box-one').eq(z).addClass('change');
            }else {
                $('.home').find('.main-box .main-box-one').eq(z).addClass('addcolor');
            }
        }
        // $('.change').removeClass('main-box-one').addClass('die');
    }
);
//想里面添加内容
function add() {
    var test=`
 
        <div class="main-box">
                <div class="main-box-one">
                <span id="name1">${all[numone++]}</span></div>
                <div class="main-box-two">
                 <span id="nametwo">${(num++)+"号"}</span>
                </div>
                <div class="box-photo">
                <img src="image/task03-sprite.png">
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
//点击选择杀人
$(document).ready(function () {
    $('.main-box-one').click(function () {
        addbackground();
        console.log(this);
        all2=[...all3];
        console.log(all2);
        $('.main-box-one').removeClass('on');
        $(this).addClass('on');
         on = $('.main-box-one').index($('.on'));
        console.log(on);
        all2[on]='死亡';
        console.log(all2);
        this.style.backgroundColor='#83b09a';
        // addbackground();
        console.log(this);
        this.style.backgroundColor='#83b09a';
        $(this).siblings().css('display','block');
        name1=$(this).text().replace(/^[\s　]+|[\s　]+$/g,"");//获取当前span内容
        name2=$(this).next().text().replace(/^[\s　]+|[\s　]+$/g,"");//获取同级span内容
        bbq=1;
    })
});
//背景颜色改变
function addbackground() {
    $('.box-photo').css('display','none');
    $('.addcolor').css('background-color','#f5c97b');

}
//点击按钮跳转
$(document).ready(function () {
    $('#button').click(function () {
        if (bbq === 0){
            alert('请选择对象')
        }
        content();

        console.log(conte);
        console.log(name1);

        // window.location='task04.html';

        sessionStorage.setItem('all3',JSON.stringify(all2));
        sessionStorage.setItem('all4',JSON.stringify(all2));
        // addmessage();
        oneday();
        run();
        addtime();

    })
});
//获取死亡身份
function content() {
    // console.log(name2+'被杀手杀死，真实身份是'+name1);
    conte = name2+'投票投死了，真实身份是'+name1;
    sessionStorage.setItem('death',JSON.stringify(conte));
}
//判断
function run() {

    var all4=JSON.parse(sessionStorage.getItem("all4"));
    console.log(all4);
    switch (name1) {
        case undefined:
            alert('请重新选择');
            break
    }
    var a=0;
    var b=0;
    for (var c=0;c<all4.length;c++){
        if (all4[c] === '杀手'){
            a++
        }else if (all4[c] === '平民'){
            b++
        }

    }


    switch (true) {
        case a > b:
            alert('杀手获胜');
            window.location='end.html';//结束页面
            break;
        case a === 0:
            window.location='end.html';
            alert('平民获胜');
            break;
        case a===b:
            alert('游戏结束');
            window.location='end.html';
            break;
        default:
            window.location='task04.html';
            sessionStorage.removeItem('state');
            // var day=sessionStorage.getItem('day');
            // console.log(day);
            // day++;
            // console.log(day);
            // sessionStorage.setItem('day',day);

    }
}

//增加天数
function addtime() {
    var day=sessionStorage.getItem('day');
    day++;
    console.log(day);
    sessionStorage.setItem('day',day);
}
//存储死亡的信息到对象
function oneday() {
//
    //杀手杀人的信息
    var test1=JSON.parse(sessionStorage.getItem('test'));
    //投票投死的信息
    var death1=JSON.parse(sessionStorage.getItem('death'));
    // console.log(death1);
    //获取当前的天数
    var x=sessionStorage.getItem('day');
    console.log(x);
    //新建一个对象
    var box=[];
    //新建一个空的
    var z= JSON.parse(sessionStorage.getItem("number"));
    console.log(z);
    if (z === null){
        box.push({});
        z=box;
    }else {
        z.push({});
    }
    console.log(x);
    // 存储杀手杀人的信息
    z[x-1].daytime=('黑夜：'+test1);
    // sessionStorage.setItem('number',JSON.stringify(z));
    z[x-1].night=('白天：'+death1);

    sessionStorage.setItem('number',JSON.stringify(z));
    // addtime();
}



