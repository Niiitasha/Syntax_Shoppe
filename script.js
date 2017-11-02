function showCart() {
  alert("showCart");
  $("#shoppe").hide();
  $("#cart").show();
}

function popup(item) {

$("#item").attr("src", item);
$("#shoppePop").show();
}

function showShoppe() {
  alert('showShoppe');
  $("#shoppe").show();
  $("#cart").hide();
}

var items = [{
  name: "none",
  category: "none",
  description: "none",
  price: 0,
  quantity: 0
}];



function pay(style){
switch (style) {
  case "cash":

    break;
  case "credit":

    break;
}
close("payment");
}

function showCard(){
$("creditOptions").show();
}

function showCash(){

}

function addToCart() {

}

function close(popup) {
$("#" + popup).hide();
}
