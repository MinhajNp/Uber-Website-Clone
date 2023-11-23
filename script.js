var toTop=document.querySelector(".to-top");

window.addEventListener("scroll",() =>{
    if(window.pageYOffset > 500){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

var signUp=document.querySelector(".over-div");



function signUpClick(){
    if(signUp.style.display=="none"){
        signUp.style.display="block";
    }
    else{
        signUp.style.display="none";

    }
   
}
var login=document.querySelector(".over-div-login");
function loginClick(){
    if(login.style.display=="none"){
        login.style.display="block";
    }
    else{
        login.style.display="none";

    }
   
}
