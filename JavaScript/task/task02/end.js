//初始化运行
$(document).ready(function () {
    information();
    join();
    add();
});

//获取各种人数
function information() {
    var key=JSON.parse(localStorage.getItem('key'));
    //总人数
    var txt=key.length;
    //人数信息
    var all4=sessionStorage.getItem("all4");
    console.log(all4);
    var reg = new RegExp("平民", "g");
    //平民人数
    var test= all4.match(reg).length;
    console.log(test);
    if (test === undefined){
        var test=0;
        console.log(test);
    }
    //死亡人数
    var olreg=new RegExp('死亡','g');
    var txt1=all4.match(olreg).length;
    console.log(txt1);
    if (txt1 === undefined){
        var txt1=0;
        console.log(txt1);
    }
    //
    //添加div
    var txt=`
    <p>剩余人数${txt-txt1-test+test}人</p>
    <p>杀手${txt-txt1-test}人</p>
    <p>平民${test}人</p>
    `
    $('.center-txt-one').append(txt)
}
//添加下面的div
function add() {
    var day=sessionStorage.getItem('day');
    var day=day-1;
    console.log(day);
    //获取死亡人数的信息
    var z=JSON.parse(sessionStorage.getItem("number"));
    console.log(z);
    for (let i=0;i<day;i++){

        console.log(i);
        $('.test-one').eq(i).append(`${"第"+(i+1)+"天"}`);
        $('.test-two').eq(i).append(`${z[i].daytime}`);
        $('.test-three').eq(i).append(`${z[i].night}`);

    }
    $('.bottom-txt').eq(day-1).append(`<div class="bottom-txt-three"></div>`)
}
//添加div
function join() {
    var test=`
    <div class="bottom-txt">
    <p class="test-one"></p>
    <p class="test-two"></p>
    <p class="test-three"></p>
    </div>
     `;
    var time=sessionStorage.getItem('day');
    var time=time-1;
    console.log(time);
    for (var i=0;i<time;i++){
        $('.bottom').append(test);
    }
    // $('.bottom-txt').append('<div class="bottom-txt-three"></div>')
    //添加div

}
function skip() {
    var a=confirm('确定要再来一次吗嘛');
    if (a === true){
        window.location='task02.html';

        localStorage.removeItem('key');
        sessionStorage.clear();


    } else {
        alert('继续在这里等着吧');
    }
}
