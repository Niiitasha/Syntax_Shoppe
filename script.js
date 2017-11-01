$(document).ready(function() {
var item = 0;
function showHome() {
$(".home").show();
$(".shoppe").hide();
$(".cart").hide();
}

function showShoppe() {
  $(".home").hide();
  $(".shoppe").show();
  $(".cart").hide();
}

function showCart() {
  $(".home").hide();
  $(".shoppe").hide();
  $(".cart").show();
}

function popup(shirt) {
$("#i" + shirt).show();
item = shirt;
}

function addToCart() {

}

function exitPopup(popup) {

}

});
