if(localStorage.getItem("introUnlocked") !== "true"){
    window.location.href="index.html";
}

const btn=document.getElementById("continue");

const input=document.getElementById("password");

const msg=document.getElementById("message");

const secret = "alfi syahrian yang ga pernah nyebelin";

btn.onclick=function(){

if(input.value===secret){

msg.innerHTML="Yeayyy pacar aku bener jawabnya..";

setTimeout(()=>{

localStorage.setItem("passwordVerified","true");

window.location.href="intro.html";

},2500);

}else{

msg.innerHTML=" salah, yang bener alfi syahrian yang ga pernah nyebelin";

input.value="";

input.focus();

}

}