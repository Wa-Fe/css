// //引入另外一个js文件
// new_element=document.createElement("script");
// new_element.setAttribute("type","text/javascript");
// new_element.setAttribute("src","task04.js");// 在这里引入了task04.js
// document.body.appendChild(new_element);


//执行另外一个页面的程序




//页面加载完成获取其中的身份
var bbq=0;
$(function () {
    var name = JSON.parse(localStorage.getItem("key"));
        all=name;
        all1=[...all];
        num=1;
        numone=0;
        console.log(all);
        for (var i=0;i<all.length;i++){
            add()
        }

    all3 = JSON.parse(sessionStorage.getItem('all3'));
    console.log(all3);
    for (var z=0;z<all3.length;z++){
        if (all3[z] === "死亡") {
            console.log(z);
            $('.home').find('.main-box .main-box-one').eq(z).addClass('change');
        }else {
            $('.home').find('.main-box .main-box-one').eq(z).addClass('addcolor');
        }
    }

    }
);
//点击添加元素
// $(document).ready(function () {
//    $('#button').click(function () {
//        console.log(all.length);
//         for (var i=0;i<all.length;i++){
//             console.log(i)
//         }
//        $('main').append('<div class=main-box>');//在main添加main-box
//        $('<div class=main-box-one>').appendTo($(".main-box"));//添加main-box-one到main-box
//        $('<div class=main-box-two>').appendTo($(".main-box"));//添加main-box-two到main-box
//        //ES6写法
//        // var test=`
//        // <div class="main-box">
//        //  <div class="main-box-one"></div>
//        //  <div class="main-box-two"></div>
//        //  </div>
//        // `;
//        // $('main').append(test)//在main添加test
//    })
// });
//定义一个方法添加方块,写法为es6的模版字符串
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
        all1=[...all3];
        // console.log(key1);
        // die();
        $('.main-box-one').removeClass('on');
        $(this).addClass('on');
        let on = $('.main-box-one').index($('.on'));
        all1[on]='死亡';
        console.log(all1);
        addbackground();
        console.log(this);
        this.style.backgroundColor='#83b09a';
        $(this).siblings().css('display','block');
        console.log($(this).text());
        console.log($(this).next().text());
         name1=$(this).text().replace(/^[\s　]+|[\s　]+$/g,"");//获取当前span内容
         name2=$(this).next().text().replace(/^[\s　]+|[\s　]+$/g,"");//获取同级span内容
        console.log(name1);
        console.log(name2);
        bbq=1
        switch (name1) {
            case '杀手':
                alert('杀手不能选择杀手');
                this.style.backgroundColor='#f5c97b';
        }

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
        console.log(all1);

        if (bbq === 0){
            alert('请选择对象')
        }
        //将杀人的信息保存到数组

        content();

        switch (name1) {
            case '杀手':
                alert('请重新选择');
                break;
            default:
                window.location='task04.html';
                break
        }


        sessionStorage.setItem('test',JSON.stringify(conte));
        sessionStorage.setItem('all2',JSON.stringify(all1));



    })
});
//获取当前对象文字
function content() {
    console.log(name2+'被杀手杀死，真实身份是'+name1);
     conte = name2+'被杀手杀死，真实身份是'+name1;
}
//判断其中是否含有死亡
// function die() {
//     // for (var z=0;z<all3.length;z++){
//     //     if (all3[z] === "死亡") {
//     //         all1=[...all3];
//     //         console.log(all1);
//     //     }else {
//     //         all1=[...all];
//     //         console.log(all1);
//     //     }
//     // }
//     all1=[...all3];
// }