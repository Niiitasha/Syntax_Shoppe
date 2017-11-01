$(document).ready(function() {






});


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
$("#" + shirt).show();
}

function exitPopup(popup) {

}
