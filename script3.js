  const addToBagButtons = document.querySelectorAll(".btn.b1");
  var iBag = document.getElementById("bag");
  function addToBag(x) {
    const productCard = document.querySelectorAll(".div1");
    const productName = document.querySelectorAll("h3");
    const productPrice = document.querySelectorAll("strong");
    const productImage = document.querySelectorAll(".product-image");
    var product = {};
  
    product = {
      name: productName[x - 1].innerText,
      price: productPrice[x - 1].innerHTML,
      image: productImage[x - 1].src,
    };
  
    let bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
    bagItems.push(product);
  
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
  }
  
