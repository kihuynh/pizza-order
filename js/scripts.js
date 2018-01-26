function Pizza(portion,firstTopping, secondTopping) {
  this.portion = portion;
  this.firstTopping = firstTopping; // maybe an array of toppings or string
  this.secondTopping = secondTopping;
}

Pizza.prototype.cost = function () {
  var price = 10;

  if (this.portion === "Small") {
    price -=3;
  } else if (this.portion === "Medium"){
    price -=2;
  } else {
  }
    return price;
};

Pizza.prototype.fullCost = function() {

  return "Your order is a, </br>" +  this.portion + ", " + this.firstTopping + ", " + this.secondTopping + "</br>$"
  + this.cost() + ".";
}





$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
  event.preventDefault();
  // THIS works because this.portion = portion;
//   var pizzaPortion = $("select#size").val();
//   var pizzaTopping = $("select#top").val();
//   var newPizza = new Pizza(pizzaPortion, pizzaTopping);
// console.log(pizzaTopping)

//  testing if it will output a bunch of the toppings
  // var tops= $("input:checkbox[name=topBits]:checked").val();

  var pizzaPortion = $("select#size").val();
  var firstTopping = $("select#top").val();
  var secondTopping = $("select#top-2").val();
  var newPizza = new Pizza(pizzaPortion, firstTopping, secondTopping);

    $(".pizzaCustomization").hide();
    $(".receipt").fadeIn().append(newPizza.fullCost());



  });
});
