//原生js写法
function start() {
    document.getElementById('txt-three').innerText='';
    var login=document.getElementById('login').value;
    var pwd=document.getElementById('password').value;
    console.log(login);
    console.log(pwd);
    // var xhr = GetXHR();
    var xhr=new XMLHttpRequest();
    if ((login === null || login ==='')||(pwd === null || pwd === '')){
        document.getElementById('txt-three').innerText='请输入用户名或密码';
    }else {
        xhr.onreadystatechange=function (){
            if (xhr.readyState == 4){
                if ((xhr.status >= 200 && xhr.status<300) || xhr.status == 304){
                    // alert(xhr.responseText);
                    var data=JSON.parse(xhr.responseText);
                    console.log(data);
                    if (data.code === -5003){
                        document.getElementById('txt-three').innerText=data.message;
                    } else if (data.code === -5004){
                        document.getElementById('txt-three').innerText=data.message;
                    } else {
                        console.log(data.code)
                    }
                    // console.log('name='+login+'&pwd='+pwd);
                }
            }
        };
    }

    xhr.open('POST','/carrots-admin-ajax/a/login',true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json,text/plain,*/*");
    xhr.send('name='+login+'&'+'&pwd='+pwd);


}
//jquery写法

// $(function () {
//     $('#btn').click(function () {
//         $('.txt-two').text('');
//         var login=$('#login').val();
//         var pwd=$('#password').val();
//         console.log(typeof login);
//         console.log(typeof pwd);
//         if ((login === null || login ==='')||(pwd === null || pwd === '')){
//             // alert('请输入用户名或密码');
//            $('.txt-two').text('请输入用户名和密码')
//         }else {
//             //jquery请求
//             $.ajax({
//                 type:'Post',
//                 url:'carrots-admin-ajax/a/login',
//                 contentType: 'application/x-www-form-urlencoded',
//                 data:{
//                     name:login,
//                     pwd:pwd,
//                 },
//                 // dataType:'json',
//                 success:function (data) {
//                     console.log(data.message);
//                     var json=JSON.parse(data);
//                     console.log(json);
//                     console.log(json.code);
//                     if (json.code === -5003){
//                         $('.txt-two').text(json.message)
//                     }else if (json.code === -5004){
//                         $('.txt-two').text(json.message)
//                     } else {
//                         console.log(json.code)
//                     }
//
//                 }
//
//             });
//         }
//
//
//     });
// });