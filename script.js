$(document).ready(function() {

var items = [{
  name: "none",
  category: "none",
  description: "none",
  price: 0,
  quantity: 0
}]

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

function popup(item) {

$("#item").attr("src", item);
$("shoppePop").show();
}

function addToCart() {

}

function exitPopup(popup) {

}

});
