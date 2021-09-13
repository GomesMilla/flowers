$(document).ready(function() {
    $('.slider').slider();
});
$(document).ready(function() {
    $('.parallax').parallax();
});

window.onscroll = function() { rolagem() };

function rolagem() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "0%";
    //aqui é que faz a parte realmente acontecer com as contas. Basicamentre ele pega o corpo do documento ou elemento 
}