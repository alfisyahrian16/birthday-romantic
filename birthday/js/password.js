if(localStorage.getItem("introUnlocked") !== "true"){
    window.location.href="index.html";
}

const btn=document.getElementById("continue");

const input=document.getElementById("password");

const msg=document.getElementById("message");

const secret = "alfi syahrian";

btn.onclick=function(){

if(input.value===secret){

msg.innerHTML="Yeayyy pacar aku bener jawabnya..";

setTimeout(()=>{

localStorage.setItem("passwordVerified","true");

window.location.href="intro.html";

},2500);

}else{

msg.innerHTML=" salah, pake huruf kecil dan jgn typo ya cantik";

input.value="";

input.focus();

}

}
