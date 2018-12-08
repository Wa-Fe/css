"use strict";
var oPlayerNum = document.getElementById("player");//玩家总人数
var osliderBlock = document.getElementById("slider");//滑块的值
var nongmin=[];
var shashou=[];
    function start() {
            //获取输入人数
                var a=document.getElementById("player").value;
                //计算杀手
                var b=Math.round(a / 2 + a / 6 + a / 24.1);
                //计算得处平民
                var c=a-b;
                // //分配平民人数
                for(var  n = 0; n < b; n++) {
                    nongmin[n] = "平民";
                 }
                //  //分配杀手人数
                for (var  i=0;i<c;i++){
                    shashou[i]="杀手";
                }

        //输出计算得出的值
        document.getElementById("ss").innerText=c;
        document.getElementById("pm").innerText=b;
        console.log(a);

    }
function on_change() {



    if (oPlayerNum.value >= 4 && oPlayerNum.value <= 18) {//设置方框里面玩家人数范围
        osliderBlock.value=oPlayerNum.value ;//将玩家总人数赋值给滑块的值，实现动态变化

       start();

    } else {
        alert("请输入正确的人数4~18");
        oPlayerNum.value=4;
        osliderBlock.value=4;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为6
    }

}


function moveChange() {// 滑块的值改变，运行这个函数
    oPlayerNum.value=osliderBlock.value;
    //滑块的值改变的话，滑块的值赋值给方框，实现动态变化
    start()



}
function less() {
        oPlayerNum.value--;
    start();
    //减的按钮，减掉玩家总人数的值
    if (oPlayerNum.value<4){
        alert("人太少了，再找几个小伙伴来吧");
        oPlayerNum.value=4;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为6

    }
    else {
        osliderBlock.value=oPlayerNum.value;// 将玩家人数赋值给滑轮的值
    }

}
function plus() {


    oPlayerNum.value++;
    start();
    //加的按钮，减掉玩家总人数的值，上面的值已经相互关联了，所以方框的值改变，滑块的值也会改变
    if (oPlayerNum.value>18){
        alert("人太多了，可以分一批人再开一局");
        oPlayerNum.value=18;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为18

    }
    else {
        osliderBlock.value=oPlayerNum.value;// 将玩家人数赋值给滑轮的值
    }

}






