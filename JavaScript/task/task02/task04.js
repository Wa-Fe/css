"use strict";
// var step = new StateMachine({
//     init: 'step1',
//     transitions: [
//         {name: 'one', from: 'step1', to: 'step2',},
//         {name: 'two', from: 'step2', to: 'step3',},
//         {name: 'three', from: 'step3', to: 'step4',},
//         {name: 'four', from: 'step4', to: 'step1',},
//     ],
//     //具体的事件
//     methods: {
//         onOne: function () {
//             $('.one').css('background-color', '#89B09A');
//             $('.sj-one').css('border-right-color', '#89B09A');
//             sessionStorage.setItem('state', 'one')
//         },
//         onTwo: function () {
//             $('.two').css('background-color', '#89B09A');
//             $('.sj-two').css('border-right-color', '#89B09A');
//             sessionStorage.setItem('state', 'two')
//         },
//         onThree: function () {
//             $('.three').css('background-color', '#89B09A');
//             $('.sj-three').css('border-right-color', '#89B09A');
//             sessionStorage.setItem('state', 'three')
//         },
//         onFour: function () {
//             $('.four').css('background-color', '#89B09A');
//             $('.sj-four').css('border-right-color', '#89B09A');
//             sessionStorage.setItem('state', 'four')
//         },
//     },
// });
var step;
var state;


function fsm(){
     step = new StateMachine({
        init: 'step1',
        transitions: [
            {name: 'one', from: 'step1', to: 'step2',},
            {name: 'two', from: 'step2', to: 'step3',},
            {name: 'three', from: 'step3', to: 'step4',},
            {name: 'four', from: 'step4', to: 'step1',},
        ],
        //具体的事件
        methods: {
            onOne: function () {
                $('.one').css('background-color', '#89B09A');
                $('.sj-one').css('border-right-color', '#89B09A');
                sessionStorage.setItem('state', 'one')
            },
            onTwo: function () {
                $('.two').css('background-color', '#89B09A');
                $('.sj-two').css('border-right-color', '#89B09A');
            },
            onThree: function () {
                $('.three').css('background-color', '#89B09A');
                $('.sj-three').css('border-right-color', '#89B09A');
            },
            onFour: function () {
                $('.four').css('background-color', '#89B09A');
                $('.sj-four').css('border-right-color', '#89B09A');
            },
        },
    });
}
//初始化执行
// sessionStorage.getItem('state');
$(document).ready(function() {
    //有限状态机
    fsm();
    add();
    apply();
    // txt();
    var state=sessionStorage.getItem('state');
    console.log(state);

    //第一天添加颜色

    if (state === 'one') {
        step.one();
        var day=sessionStorage.getItem('day');
        console.log(day);
        var test1=sessionStorage.getItem('test');
        var x=day-1;
        console.log(x);
      $('.one').eq(x).after(`<p class="txt-one">${test1}</p>`);

    } else {

    }
});
//动态添加div
function add() {

    var day=sessionStorage.getItem('day');
    console.log(day);
    for (var  x=0;x<day;x++){
        var test=`
     <div id="div" class="home">
            <div class="main-box">
                <p id="txt1">${"第"+(x+1)+"天"}</p>
            </div>
            <div class="box">
            <div class="main-box-two">

                <div class="box-two photo-one one" id="button1" onclick="one()">
                    <div class="sj-one"></div>
                    杀手杀人
                </div>
                <div class="box-two photo-two two" onclick="two()">
                    <div class="sj-two"></div>
                    亡灵发表遗言
                </div>
                <div class="box-two three" onclick="three()">
                    <div class="sj-three"></div>
                    玩家依次发言
                </div>
                <div class="box-two four" onclick="four()">
                    <div class="sj-four"></div>
                    全民投票
                </div>
            </div>
            </div>
        </div>
    `;
        $('main').append(test);
    }
}
//渲染上一天的颜色
var lo1=document.getElementsByClassName('sj-one');
var lo2=document.getElementsByClassName('sj-two');
var lo3=document.getElementsByClassName('sj-three');
var lo4=document.getElementsByClassName('sj-four');
function apply() {
    var x=sessionStorage.getItem('day');
    var z= JSON.parse(sessionStorage.getItem("number"));
    console.log(x);

    if (x === 1){
        //什么都不执行
    }else {
        for (let i=0;i < x-1; i++){

            $('.one').eq(i).css('background-color','#83b09a').removeAttr("onclick").after(`<p class="txt-one">${z[i].daytime}</p>`);
            $('.two').eq(i).css('background-color','#83b09a').removeAttr("onclick");
            $('.three').eq(i).css('background-color','#83b09a').removeAttr("onclick");
            $('.four').eq(i).css('background-color','#83b09a').removeAttr("onclick").after(`<p class="txt-one">${z[i].night}</p>`);

            lo1[i].style= "border-right:40px solid  #83b09a";
            lo2[i].style= "border-right:40px solid  #83b09a";
            lo3[i].style= "border-right:40px solid  #83b09a";
            lo4[i].style= "border-right:40px solid  #83b09a";
            //插入死亡信息
            // var z= JSON.parse(sessionStorage.getItem("number"));
            // console.log(z[i].daytime);

        }
    }
}

function one() {
            if (step.state === 'step1') {
            step.one();
            window.location='task04-kill.html';
        } else {
            alert('请按顺序进行操作');
            console.log(state)
        }
}
function two() {
            if (step.state === 'step2') {
            step.two();
            alert('亡灵发表遗言');
            console.log(step.state);
        } else {
            alert('请按顺序进行操作');
            console.log(step.state)
        }
}
function three() {
            if (step.state === 'step3') {
            step.three();
            alert('玩家依次发言');
            console.log(step.state);
        } else {
            alert('请按顺序进行操作');
            console.log(step.state)
        }
}
function four() {
            if (step.state === 'step4'){
            step.four();
            window.location='vote.html';
            console.log(step.state);
        } else {
            alert('请按顺序进行操作');
            console.log(step.state)
        }
}
//添加杀人信息
// function txt() {
//     var txt1=JSON.parse(sessionStorage.getItem('test'));
//     var x=sessionStorage.getItem('day');
//    var x=x-1;
//    var test1=`
//    <p class="test1">${txt1}</p>
//    `;
//    console.log(test1);
//    $('.one').after(test1);
//    sessionStorage.removeItem('test')
// }
//点击显示和隐藏
$(document).ready(function () {
    $('.box').hide();
    $('.box').last().show();
    $('.main-box').click(function () {
        $(this).next('.box').toggle();
    });
});
$(document).ready(function () {
    $('.foot-left').click(function () {
        var a=confirm('确定要结束游戏吗');
        if (a === true){
            window.location='end.html'
        } else {

        }
    });
});
$(document).ready(function () {
    $('.foot-right').click(function () {
        var a=confirm('确定要查看法官日志吗？游戏将会重新开始');
        if (a === true){
            window.location='faguan.html';
            sessionStorage.removeItem('all2');
            sessionStorage.removeItem('number');
            sessionStorage.removeItem('state');
            sessionStorage.removeItem('number');
            sessionStorage.removeItem('day');
        } else {

        }
    });
});