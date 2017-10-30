
$(document).ready(function(){  
  //读取 localStage 本地存储，填充用户名密码,如果自动登录有值直接跳转；  
  //相反，跳转到本页面,等待登陆处理
  $("#submit").attr("disabled", false);
  var subBtn = document.querySelector("#submit");
  var storage = window.localStorage;  
  var account = storage["username"];  
  var getPwd = storage["password"];  
  var getisstroepwd = storage["isstorePwd"];  
  var getisautologin = storage["isautologin"];  
    if("yes" == getisstroepwd)  
    {  
        document.querySelector("#isRemberPwdId").checked = "checked";
        if(("" != account) ||(null != account))
        {  
            $("#account").val(account);
            
            if( ("" != getPwd) ||(null != getPwd)){
              $("#password").val(getPwd);  
            }
            if("yes" == getisautologin)  
            {  
                var loading = document.querySelector(".loading");
                loading.style.display = "block";
                $("#login-form").submit();
                //自动提交
            }  
        }
    }  
 });  

//点击登录按钮
$("#submit").click(
  function login(){
    $("#submit").attr("disabled", true);
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
          console.log(window.localStorage);
          console.log(window.localStorage);
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
    $("#login-form").submit();
    $("#submit").attr("disabled", false);
    }else{
      alert("用户名或密码不能为空!");
      $("#submit").attr("disabled", false);
    }
  }
);


