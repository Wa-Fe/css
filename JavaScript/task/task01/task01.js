
//随机颜色
var color = function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
};
    var box=document.getElementsByClassName("spaceb");

    function test1() {
        t1=setInterval(function () {test2()},1000);
        document.getElementById("mybuttom").disabled=true;
    }



//开始着色
function  test2 () {


    //初始化颜色为黄色
    for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = "#fea500";

    }

    //洗牌算法
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    function shuffleArray(arr) {
        var arr = arr.slice();
        var len = arr.length;
        var temp, random_index;
        while (len != 0) {
            random_index = Math.round(0 + (len - 1 - 0) * Math.random());
            temp = arr[random_index];
            arr[random_index] = arr[len - 1];
            arr[len - 1] = temp;
            --len;
        }
        return arr;
    }

    // function sort2(arr) {
    //     var newArr = [];
    //     newArr = arr.sort(function() {
    //         return Math.random() - 0.5;
    //     })
    //     return newArr;
    // }
    console.log(arr);
    var x = shuffleArray(arr)[0];
    var y = shuffleArray(arr)[1];
    var z = shuffleArray(arr)[2];

    console.log(box[x]);
    console.log(box[y]);
    console.log(box[z]);
    console.log('1');

    box[x].style.backgroundColor = color();
    box[y].style.backgroundColor = color();
    box[z].style.backgroundColor = color();
    //定时器



    if(x !== y && y !== z && z !== x){
        box[x].style.backgroundColor = color();
        box[y].style.backgroundColor = color();
        box[z].style.backgroundColor = color();
    }else{
        test2();
    }


}


// //结束闪
// function test2() {
//     var test = document.getElementsByClassName("spacea");
//     for (var i = 0; i < test.length; i++) {
//         test[i].style.backgroundColor = "orange";
//     }
//
// }
//清除定时器并结束
function test3() {
    console.log("结束闪");
    clearInterval(t1);
    document.getElementById("mybuttom").disabled=false;
    var test = document.getElementsByClassName("spaceb");
    for (var i = 0; i < test.length; i++) {
        test[i].style.backgroundColor = "#fea500";
    }

}





