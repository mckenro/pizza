//backend

function Pizza(sauce, meatToppings, veggieToppings, size){
  this.sauce = sauce;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.size = size;
  this.sizeTotal = function (){
    if (sizeSelection === "Small (12 inch)") {
      return 12;
    } else if (sizeSelection === "Medium (14 inch)") {
      return 14;
    } else if (sizeSelection === "Large (17 inch)") {
      return 17;
    }
  }
}
// use prototype to calculate total cost of pizza
Pizza.prototype.pizzaCost = function () {
  return ((meatToppings[i].length * 2.5) + (veggieToppings[i].length * 1.5) + sizeTotal);
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
      $("#meats").append("<h4>" + meatSelection + "</h4>")
    })

    $("#veggies").show();
    var veggieSelection = $("input:checkbox[name=veggie]:checked").each(function() {
      var veggieInput = $(this).val();
      $("#veggies").append("<h4>" + veggieSelection + "</h4>")
    })

    $("#size").show();
    var sizeSelection = $("input:radio[name=size]:checked").val();
    $("#size").append("<h4>" + sizeSelection + "</h4>")

    var userPizza = new Pizza(sauceSelection, meatSelection, veggieSelection, sizeSelection);
 console.log(userPizza);
 console.log(userPizza.pizzaCost());
  });
});
