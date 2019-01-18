//获取点击按钮事件
function start(){
    var login=document.getElementById('login').value;
    console.log(login);
    var pass=document.getElementById('password').value;
    console.log(pass);
    if(login == undefined || pass == undefined){
        alert('请正确用户名或密码')
    }
}