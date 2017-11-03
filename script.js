var subtotal = 0;
var total = 0;

function showCart() {
  $("#shoppe").hide();
  $("#cart").show();
  $.each(items, function(count) {
if (items[count].quantity > 0) {
  $("#p"+ count).find(".description").html(items[count].description);
  $("#p"+ count).find(".itemQuantity").html(items[count].quantity);
  $("#p"+ count).find(".cost").html((items[count].price * items[count].quantity).toFixed(2));
  $("#p" + count).show();
}else{
  $("#p" + count).hide();
}
  });
}

function popup(item) {
var element = items[item];
$("#shoppePop").show();
$("#price").html("Price: $" + element.price);
$("#item").attr("src", element.src);
$("#hidden").val(item);
}

function showShoppe() {
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
  description: "Purple Beanie",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/purplebeanie.jpg"
},
{
  name: "Green Beanie",
  category: "Beanie",
  description: "Green Beanie",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/greenbeanie.jpg"
},
{
  name: "Grey Beanie",
  category: "Beanie",
  description: "Grey Beanie",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/greybeanie.jpg"
},
{
  name: "Brown Beanie",
  category: "Beanie",
  description: "Brown Beanie",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/brownbeanie.jpg"
},
{
  name: "Black T-shirt",
  category: "T-shirt",
  description: "Black T-shirt",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/blacktshirt.png"
},
{
  name: "Purple T-shirt",
  category: "T-shirt",
  description: "Purple T-shirt",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/purpletshirt.png"
},
{
  name: "Green T-shirt",
  category: "T-shirt",
  description: "Green T-shirt",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/greentshirt.png"
},
{
  name: "Red T-shirt",
  category: "T-shirt",
  description: "Red T-shirt",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/redtshirt.png"
},
{
  name: "Green Hoodie",
  category: "Hoodie",
  description: "Green Hoodie",
  price: 39.99,
  quantity: 0,
  src: "syntaxImages/greenhoodie.jpg"
},
{
  name: "Purple Hoodie",
  category: "Hoodie",
  description: "Purple Hoodie",
  price: 39.99,
  quantity: 0,
  src: "syntaxImages/purplehoodie.jpg"
},
{
  name: "Grey Hoodie",
  category: "Hoodie",
  description: "Grey Hoodie",
  price: 39.99,
  quantity: 0,
  src: "syntaxImages/greyhoodie.jpg"
},
{
  name: "Red Hoodie",
  category: "Hoodie",
  description: "Red Hoodie",
  price: 24.99,
  quantity: 0,
  src: "syntaxImages/redhoodie.jpg"
}];

function checkout() {
  $.each(items, function(item){
    subtotal += parseInt(items[item].price * items[item].quantity);
  });
  total = (subtotal * 1.06).toFixed(2);
  $("#payment").show();
}

function pay(style){

close(style);
$("#receipt").show();
}

function showCard(){
$("#creditOptions").show();
close("payment");
}

function showCash(){
  $("#total").html("Total: " + total);
$("#cashMoney").show();
close("payment");
}

function addToCart() {
var item = $("#hidden").val();
var element = items[item];
element.quantity += parseInt($("#quantity").val());
close("shoppePop");
}

function close(popup) {
$("#" + popup).hide();
}
$("#amountTendered").change(function() {
var remainder = ($("#amountTendered").val() - total);
$("#change").html("Change: " + remainder.toFixed(2));
});
$(document).ready(function() {
$("#text").keyup(function(){
  var text = $("#text").val();
    $("#customWords").html(text + ";");
});
});
