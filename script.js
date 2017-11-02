function showCart() {
  alert("showCart");
  $("#shoppe").hide();
  $("#cart").show();
}

function popup(item) {
alert(item);
$("#item").attr("src", item);
$("#shoppePop").show();
}

function showShoppe() {
  alert('showShoppe');
  $("#shoppe").show();
  $("#cart").hide();
}

$(document).ready(function() {

var items = [{
  name: "none",
  category: "none",
  description: "none",
  price: 0,
  quantity: 0
}]

function addToCart() {

}

function exitPopup(popup) {

}

});
