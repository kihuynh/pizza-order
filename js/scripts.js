function Pizza(portion, topping) {
  this.portion = portion;
  this.topping = topping; // maybe an array of toppings or string
}

Pizza.prototype.fullCost = function() {
  return this.portion + ", " + this.topping + ".";
}





$(document).ready(function() {
  // var portion = $("select#size").val();
  // var topping = $("select#top").val();
  // var newPizza = new Pizza(portion, topping);

  $("form#pizzaSelect").submit(function(event) {
  event.preventDefault();
    var pizzaPortion = $("select#size").val();
    var pizzaTopping = $("select#top").val();
    var newPizza = new Pizza(pizzaPortion, pizzaTopping);


    $(".receipt").append(newPizza.fullCost());
    });


});
