function Pizza(portion,topping, second) {
  this.portion = portion;
  this.topping = topping; // maybe an array of toppings or string
  this.second = [];
}

Pizza.prototype.cost = function () {
  var price = 10;

  if (this.portion === "Small") {
    price = price -2;
  } else {

  }
    return price;
}


Pizza.prototype.fullCost = function() {

  return "Your order is </br>" +  this.portion + ", " + this.topping + "</br>" + this.cost() + ".";
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
  var tops= $("input:checkbox[name=topBits]:checked").val();
  var pizzaPortion = $("select#size").val();
  var pizzaTopping = $("select#top").val();
  var newPizza = new Pizza(pizzaPortion, pizzaTopping, tops);
console.log(newPizza.cost)
    //get checkboxes to push into tops variable and output
    $("input:checkbox[name=topBits]:checked").each(function(){
      newPizza.second.push($(this).val());
    });

    $(".receipt").show().append(newPizza.fullCost());
    });


});
