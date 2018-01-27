function Pizza(portion,firstTopping, secondTopping) {
  this.portion = portion;
  this.firstTopping = firstTopping;
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

  return "Your order is a, </br>" +  this.portion + " pizza , </br>" + "With " + this.firstTopping + " and " + this.secondTopping + ". </br> Final cost is, $" + this.cost() + ".";
}

$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
  event.preventDefault();

    var pizzaPortion = $("select#size").val();
    var firstTopping = $("select#top").val();
    var secondTopping = $("select#top-2").val();
    var newPizza = new Pizza(pizzaPortion, firstTopping, secondTopping);

    $(".pizzaCustomization").hide();
    $(".receipt").fadeIn().append(newPizza.fullCost());

  });
});
