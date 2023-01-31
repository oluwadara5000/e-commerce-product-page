var btnIncrease = document.getElementById("increase");
var btnDecrease = document.getElementById("decrease");
var span = document.getElementById("quantity");
var empty = document.getElementById("show-cart");
var close = document.getElementById("hide-cart");

document.getElementById("cartAmount").style.display = "none"
document.getElementById("window-empty").style.display = "none"
document.getElementById("hide-cart").style.display = "none";

let count = 0;

function decrease() {
  if (count > 0) {
    count -=1
  }

  else {
    return 0
  }

  if (count === 0) {
    document.getElementById("cartAmount").style.display = "none"
  }

  document.getElementById("quantity").innerHTML = count;
  document.getElementById("cartAmount").innerHTML = count
  console.log(count);
}

function increase() {
  count += 1
  document.getElementById("quantity").innerHTML = count; 
   document.getElementById("cartAmount").style.display = "block";
   document.getElementById("cartAmount").innerHTML = count;
  console.log(count);
}

empty.addEventListener("click", function () {
  document.getElementById("show-cart").style.display = "none"
  document.getElementById("hide-cart").style.display = "block";

  if (count === 0) {
    document.getElementById("window-empty").style.display = "block";
  }
  else {
    document.getElementById("window-empty").style.display = "none";
    document.getElementById("window-include").style.display = "block";
  }
});

close.addEventListener("click", function () {
  document.getElementById("show-cart").style.display = "block";
  document.getElementById("hide-cart").style.display = "none";
  document.getElementById("window-empty").style.display = "none";
  document.getElementById("window-include").style.display = "none";
});