let txtuser = document.querySelector('.txtuser');
let txtpass = document.querySelector('.txtpass');
let submit = document.querySelector(".submit");
let enter = document.querySelector(".enter");

if(window.localStorage){
   
localStorage.setItem("user","daily");
localStorage.setItem("pass","1234");

let user =localStorage.getItem("user");
let pass =localStorage.getItem("pass");

let message = document.querySelector('.message');




submit.addEventListener("click",()=>{
   if(user==txtuser.value&&pass==txtpass.value){
      message.innerHTML="login successfull";
      location.href = "user.html";
   }else{
      message.innerHTML='username or password is invalid';
   }
})
enter.addEventListener("click",()=>{
   if(user==txtuser.value&&pass==txtpass.value){
      message.innerHTML="login successfull";
      location.href="admin.html";
   }else{
      message.innerHTML='username or password is invalid';
   }
})
 }
