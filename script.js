function showCart() {
  alert("showCart");
  $("#shoppe").hide();
  $("#cart").show();
}

function popup(item) {
var element = items[item];
$("#shoppePop").show();
$("price").html("$" + element.price);
$("#item").attr("src", element.src);
$("#hidden").val(item);
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
  quantity: 0,
  src: ""
},
{
  name: "Purple Beanie",
  category: "Beanie",
  description: "Purple",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/purplebeanie.jpg"
},
{
  name: "Green Beanie",
  category: "Beanie",
  description: "Green",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/greenbeanie.jpg"
},
{
  name: "Grey Beanie",
  category: "Beanie",
  description: "Grey",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/greybeanie.jpg"
},
{
  name: "Brown Beanie",
  category: "Beanie",
  description: "Brown",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/brownbeanie.jpg"
},
{
  name: "Black T-shirt",
  category: "T-shirt",
  description: "Black",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/blacktshirt.png"
},
{
  name: "Purple T-shirt",
  category: "T-shirt",
  description: "Purple",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/purpletshirt.png"
},
{
  name: "Green T-shirt",
  category: "T-shirt",
  description: "Green",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/greentshirt.png"
},
{
  name: "Red T-shirt",
  category: "T-shirt",
  description: "Red",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/redtshirt.png"
},
{
  name: "Green Hoodie",
  category: "Hoodie",
  description: "Green",
  price: 39.99,
  quantity: 0,
  src: "syntaxImages/greenhoodie.jpg"
},
{
  name: "Purple Hoodie",
  category: "Hoodie",
  description: "Purple",
  price: 39.99,
  quantity: 0,
  src: "syntaxImages/purplehoodie.jpg"
},
{
  name: "Grey Hoodie",
  category: "Hoodie",
  description: "Grey",
  price: 39.99,
  quantity: 0,
  src: "syntaxImages/greyhoodie.jpg"
},
{
  name: "Red Hoodie",
  category: "Hoodie",
  description: "Red",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/redhoodie.jpg"
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
var item = $("#hidden").val();
alert(item);
}

function close(popup) {
$("#" + popup).hide();
}

$(document).ready(function() {

$("#text").keyup(function(){
  var text = $("#text").val();
    $("#customWords").html(text);
});
});
