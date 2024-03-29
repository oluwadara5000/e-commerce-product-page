# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](/images/e-commerce-screenshot.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/oluwadara5000/e-commerce-product-page)
- Live Site URL: [Live Site Link](https://sneaker-ecommerce-store.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript


### What I learned

```css
.lightbox {
  --current-slide: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
```
```js
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
  document.getElementById("window-empty").style.display = "none";
  document.getElementById("window-include").style.display = "block";
  document.getElementById("cartAmount").innerHTML = count;
  document.getElementById("window-quantity").innerHTML = count;
  console.log(count);

  var a = 125;
  var b = count;
  var c = a * b;
  document.getElementById("window-price").innerHTML = "$" + c;
  console.log(c);
}
```

### Useful resources

- [Add to cart feature Using HTML CSS and JS.](https://youtu.be/-nz9rhyPXFc) - This resource helped me build the shopping cart and also all the behaviours i.e. the quantity and the displaying of total price.

## Author

- GitHub - [Odejobi Oluwadara](https://github.com/oluwadara5000)
- Frontend Mentor - [@oluwadara5000](https://www.frontendmentor.io/profile/oluwadara5000)


