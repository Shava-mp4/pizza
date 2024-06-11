//Program Title

document.getElementById("PlaceOrder").addEventListener("click", PlaceOrder);

function PlaceOrder() {
  let size = document.getElementById("pizza-size").value;
  let topping1 = document.getElementById("topping1").value;
  let topping2 = document.getElementById("topping2").value;

  // let order = `Your ${size.toLowerCase()} pizza with ${topping1.toLowerCase()} and ${topping2.toLowerCase()} will be ready in 20 minutes.`;
  let order = `You ordered a ${size} pizza with:`;
  let topping = `${topping1}`;
  let toppingTwo = `${topping2}`;

  document.getElementById("orderDone").innerHTML = order;
  document.getElementById("t1").innerHTML = topping;
  document.getElementById("t2").innerHTML = toppingTwo;
  document.getElementById("73").innerHTML =
    'Thank you for ordering from <a href="https://www.pizza73.com/store/1/delivery">Pizza 73</a>! Your pizza will be ready in 20 minutes.';

  document.getElementById("pizzaPhoto").innerHTML =
    '<img width=600px src="classic-cheese-pizza.jpg">';
}
