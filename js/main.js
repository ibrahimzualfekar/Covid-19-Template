var x = document.getElementById("ddd");
var n = document.getElementById("oneofsix");

x.addEventListener("load", meme());


function meme(){
    console.log("hello");
    // x.removeAttribute("autofocus")
    x.focus();
    n.setAttribute('class', "collapse show")
}