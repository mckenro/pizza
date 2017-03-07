//backend
function Pizza(sauce, meatToppings, veggieToppings, sizes){
  this.sauce = sauce;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.sizes = sizes;
}

// use prototype to calculate total cost of pizza
Pizza.prototype.pizzaCost = function () {
  if (this.sizes === "Small"){
    return ((this.meatToppings.length * 2.5) + (this.veggieToppings.length * 1.5) + 12);
  } else if (this.sizes === "Medium"){
    return ((this.meatToppings.length * 2.5) + (this.veggieToppings.length * 1.5) + 14);
  } else if (this.sizes === "Large") {
  return ((this.meatToppings.length * 2.5) + (this.veggieToppings.length * 1.5) + 17);
  }
  }

//frontend
$(document).ready(function() {
  $("form#pizzaChoices").submit(function(event) {
    event.preventDefault();

    $("#sauce").show();
    var sauceSelection = $("input:radio[name=sauce]:checked").val();
    $("#sauce").append("<h4>" + sauceSelection + "</h4>")

    $("#meats").show();
    var meatSelection = $("input:checkbox[name=meat]:checked").each(function() {
      var meatInput = $(this).val();
      $("#meats").append("<h4>" + meatInput + "</h4>")
    })

    $("#veggies").show();
    var veggieSelection = $("input:checkbox[name=veggie]:checked").each(function() {
      var veggieInput = $(this).val();
      $("#veggies").append("<h4>" + veggieInput + "</h4>")
    })

    $("#size").show();
    var sizeSelection = $("input:radio[name=sizes]:checked").val();
    $("#size").append("<h4>" + sizeSelection + "</h4>")

    $(".pizzaChoices").hide();
    $("#pizzaChoices").hide();
    $("#orderTotal").show();
    var userPizza = new Pizza(sauceSelection, meatSelection, veggieSelection, sizeSelection);
    var userPizzaPrice = (userPizza.pizzaCost());
    $("#orderTotal").append("<h3>$" + userPizzaPrice + "</h3>");
  });
});
