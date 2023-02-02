const previousButton = document.querySelector("[previous-button]");

const nextButton = document.querySelector("[next-button]");

const lightbox = document.querySelector("[lightbox]");

const slidesContainer = document.querySelector("[lightbox-container]");

// document.getElementById("lightbox").style.display = "none"

let currentSlide = 0;
const slidesNumber = slidesContainer.children.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slidesNumber;
  lightbox.style.setProperty("--current-slide", currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1) % slidesNumber;

  if (currentSlide < 0) {
    currentSlide += slidesNumber;
  }
  lightbox.style.setProperty("--current-slide", currentSlide);
}

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

var btnIncrease = document.getElementById("increase");
var btnDecrease = document.getElementById("decrease");
var span = document.getElementById("quantity");
var empty = document.getElementById("show-cart");
var close = document.getElementById("hide-cart");
var windowQuantity = document.getElementById("window-quantity");
var windowPrice = document.getElementById("window-price");
var cost = document.getElementById("unit-cost");
var deleteCart = document.getElementById("delete");
var deleteCartBehaviour = document.getElementById("delete-cart-behaviour");
var link = document.getElementById("link");
var linkTwo = document.getElementById("link-II");
var linkThree = document.getElementById("link-III");
var linkFour = document.getElementById("link-IV");
var closeLightbox = document.getElementById("close");

document.getElementById("cartAmount").style.display = "none";
document.getElementById("window-empty").style.display = "none";
document.getElementById("window-include").style.display = "none";
document.getElementById("hide-cart").style.display = "none";
document.getElementById("delete-cart-behaviour").style.display = "none";

var count = 0;

function decrease() {
  if (count > 0) {
    count -= 1;
  } else {
    return 0;
  }

  if (count === 0) {
    document.getElementById("cartAmount").style.display = "none";
  }

  document.getElementById("quantity").innerHTML = count;
  document.getElementById("cartAmount").innerHTML = count;
  document.getElementById("window-quantity").innerHTML = count;
  console.log(count);
}

function increase() {
  count += 1;
  document.getElementById("quantity").innerHTML = count;
  document.getElementById("cartAmount").style.display = "block";
  document.getElementById("cartAmount").innerHTML = count;
  document.getElementById("window-quantity").innerHTML = count;
  console.log(count);

  var a = 125;
  var b = count;
  var c = a * b;
  document.getElementById("window-price").innerHTML = "$" + c;
  console.log(c);
}

close.addEventListener("click", function () {
  document.getElementById("show-cart").style.display = "block";
  document.getElementById("hide-cart").style.display = "none";
  document.getElementById("window-empty").style.display = "none";
  document.getElementById("window-include").style.display = "none";
});

empty.addEventListener("click", function () {
  document.getElementById("show-cart").style.display = "none";
  document.getElementById("hide-cart").style.display = "block";

  if (count === 0) {
    document.getElementById("window-empty").style.display = "block";
  } else {
    document.getElementById("window-empty").style.display = "none";
    document.getElementById("window-include").style.display = "block";
  }
});

deleteCartBehaviour.addEventListener("click", function () {
  document.getElementById("hide-cart").style.display = "block";

  if (count === 0) {
    document.getElementById("window-empty").style.display = "block";
  } else {
    document.getElementById("window-empty").style.display = "block";
    document.getElementById("window-include").style.display = "none";
  }
});

deleteCart.addEventListener("click", function () {
  document.getElementById("show-cart").style.display = "none";
  document.getElementById("hide-cart").style.display = "none";
  document.getElementById("delete-cart-behaviour").style.display = "block";
  document.getElementById("cartAmount").innerHTML = 0;
  document.getElementById("window-quantity").innerHTML = 0;
  document.getElementById("window-price").innerHTML = "$" + 0;
  document.getElementById("cartAmount").style.display = "none";
  document.getElementById("quantity").innerHTML = 0;
});

closeLightbox.addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "none";
})

link.addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "flex";
});

linkTwo.addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "flex";
});

linkThree.addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "flex";
});

linkFour.addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "flex";
});
