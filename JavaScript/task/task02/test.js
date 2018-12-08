// var ary=[];
// ary.valueof=function (){
//         ary.push(ary.length);
//         ary.length < 100 && +ary;
//     }
//     +ary;
// Object.keys(Array(100).toString().split(","))

// function genArr(i, arr){
//     if(i < 10){
//         arr[i] = i++
//         return genArr(i, arr);
//     } else {
//         return arr;
//     }
// }
// var arr = genArr(0, [])

// var a =[],
//     b= function () {
//     return a.length<100?(a.push(a.length)&&arguments.callee()):a
// }();
// console.log(a);
//

// [...Array(10).keys()]
//
// Array(100).fill().map((v, i) => i)
// var ddd = [];
// for(var n = 0; n < 7; n++) ddd[n] = 0

//
var a = [];
for(var n = 0; n < 100; n++) {
    a[n] = "平民"
}
