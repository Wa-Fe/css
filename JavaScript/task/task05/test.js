//..




//测试
// $('#btn').click(function (){
//     console.log(111);
//     $.getJSON("carrots-admin-ajax/a/login",{
//        name:$('#login').val(),
//         pwd:$('#password').val(),
//     },function(date){
//         console.log(date.content);
//     }
//
//     );
// });
// function jsonpCallback(data) {
//     console.log("jsonpCallback: " + data.name)
// }
// $(function () {
//     $('#btn').click(function () {
//         var date={
//             name:$('#login').val(),
//             pwd:$('#password').val()
//         };
//         $.ajax({
//             url: 'carrots-admin-ajax/a/login',
//             date:date,
//             type: 'post',
//             dateType: 'jsonp',
//             timeout: 5000,
//             // jsonp 字段含义为服务器通过什么字段获取回调函数的名称
//             jsonp: 'callback',
//             // 声明本地回调函数的名称，jquery 默认随机生成一个函数名称
//             jsonpCallback: 'jsonpCallback',
//             success:function (date) {
//                 console.log("ajax success callback: " + data.name)
//             },
//         })
//
//         });
//     });
//jquery写法
// $(function () {
//     $('#btn').click(function () {
//         var login=$('#login').val();
//         var pwd=$('#password').val();
//         console.log(typeof login);
//         console.log(typeof pwd);
//         if ((login === null || login ==='')||(pwd === null || pwd === '')){
//             alert('请输入用户名或密码')
//         }
//         //jquery请求
//         $.ajax({
//             type:'Post',
//             url:'carrots-admin-ajax/a/login',
//             contentType: 'application/x-www-form-urlencoded',
//             data:{
//                 name:login,
//                 pwd:pwd,
//             },
//             // dataType:'json',
//             success:function (data) {
//                 console.log(data.message);
//                 var json=JSON.parse(data);
//                 console.log(json);
//                 console.log(json.code);
//                if (json.code === -5003){
//                    alert(json.message);
//                }else if (json.code === -5004){
//                    alert(json.message);
//                } else {
//                    console.log(json.code)
//                }
//
//             }
//
//         });
//
//     });
// });
//原生js写法
function start() {
    var login=document.getElementById('login').value;
    var pwd=document.getElementById('password').value;
    console.log(login);
    console.log(pwd);
    // var xhr = GetXHR();
    var xhr=new XMLHttpRequest();
    if ((login === null || login ==='')||(pwd === null || pwd === '')){
        alert('请输入用户名或密码')
    }
    xhr.onreadystatechange=function (){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status<300) || xhr.status == 304){
                // alert(xhr.responseText);
                var data=JSON.parse(xhr.responseText);
                console.log(data);
                if (data.code === -5003){
                    alert(data.message)
                } else if (data.code === -5004){
                    alert(data.message);
                } else {
                    console.log(data.code)
                }
               // console.log('name='+login+'&pwd='+pwd);
            }
        }
    };
    xhr.open('POST','/carrots-admin-ajax/a/login',true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json,text/plain,*/*");
    xhr.send('name='+login+'&'+'&pwd='+pwd);
console.log(data);

}
