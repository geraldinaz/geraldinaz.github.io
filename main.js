window.onscroll = function() {myFunction()};
var header = document.getElementById("myNav");
var sticky = header.offsetTop;
function myFunction() {
    if (windows.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}