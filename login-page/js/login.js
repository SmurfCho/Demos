
$(document).ready(function(){  
  //读取 localStage 本地存储，填充用户名密码,如果自动登录有值直接跳转；  
  //相反，跳转到本页面,等待登陆处理
  var subBtn = document.querySelector("#submit");
  subBtn.addEventListener("click",login,false);  
  var storage = window.localStorage;  
    var account = storage["username"];  
    var getPwd = storage["password"];  
    var getisstroepwd = storage["isstorePwd"];  
    var getisautologin = storage["isautologin"];  
    if("yes" == getisstroepwd)  
    {  
        if(("" != account) ||(null != account))
        {  
            $("#account").val(account);
            
            if( ("" != getPwd) ||(null != getPwd)){
              $("#password").val(getPwd);  
            }
            

            if("yes" == getisautologin)  
            {  
                //lacoste  已经保存 登陆信息（密码和邮件名） 直接登陆  
                // alert('正在自动登录');
                var loading = document.querySelector(".loading");
                loading.style.display = "block";
               // window.location="";   
               //加载时显示：正在自动登录
                $.ajax({
          url : '../loginServlet',//发送请求的地址
          data : {
            username :  account,
            password : getPwd 
          },
          dataType : 'json',
          success : function(data) {
            if (data.msg == "") {
              var warning = document.querySelector(".login-warning");
              warning.style.display = "block";
            } else {
            //登录成功后保存session，如果选择了记住密码，再保存到本地
              window.location.href ='../index/index.jsp';
              loading.style.display = "none";
            }
          },
          error : function() {
            alert("系统错误");
            loading.style.display = "none";
          }
     			});


            }  
        }
    }  
 });  

//点击登录按钮
function login(){
  var account = document.querySelector("#account").value;
  var password = document.querySelector("#password").value;
  if( ((account != "") || (account != null)) && ((password != "") || (password != null))){
    var userEmail=$("#account").val();  
    var userPassWord=$("#password").val();  
  
    var storage = window.localStorage;  
    var loading = document.querySelector(".loading");
    loading.style.display = "block";
    //记住密码  
    if(document.getElementById("isRemberPwdId").checked)  
    {  
        //存储到loaclStage    
  
        storage["username"] = userEmail;  
        storage["password"] =  userPassWord;  
        storage["isstorePwd"] =  "yes";  
    }  
    else  
    {  
        storage["username"] = userEmail;  
        storage["isstorePwd"] =  "no";  
    }  
  
    //下次自动登录  
    if(document.getElementById("isAutoLoginId").checked)  
    {  
        //存储到loaclStage    
        storage["username"] = userEmail;  
        storage["password"] =  userPassWord;  
        storage["isstorePwd"] =  "yes";  
        storage["isautologin"] =  "yes";  
    }  
    else  
    {  
        storage["username"] = userEmail;  
        storage["isautologin"] =  "no";  
    } 

     $.ajax({
      url : '../loginServlet',
      data : {
        username : userEmail,
        password : userPassWord
      },
      dataType : 'json',
      success : function(data) {
        if (data.msg == "") {
          var warning = document.querySelector(".login-warning");
              warning.style.display = "block";
        } else {
        //登录成功后保存session，如果选择了记住密码，再保存到本地
          window.location.href ='../index/index.jsp';
          loading.style.display = "none";
        }
      },
      error : function() {
        alert("系统错误");
        loading.style.display = "none";
      }
     });
  }
}
