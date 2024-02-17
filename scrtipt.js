var productNameInput = document.getElementById("ProductName");
var productColorInput = document.getElementById("Productcolor");
var ProductdescInput = document.getElementById("Productdesc");
var productImage = document.getElementById("product-image");
var ProductPriceInput = document.getElementById("ProductPrice");
var productContainer = [];
var t = document.getElementById("tBody");
var r = document.getElementById("row1");
console.log(r);

if (localStorage.getItem("products") != null) {
  productContainer = JSON.parse(localStorage.getItem("products"));
  displayProduct(productContainer);
}
function addProduct() {
  product = {
    Name: productNameInput.value,
    color: productColorInput.value,
    desc: ProductdescInput.value,
    image: productImage.value,
    price: ProductPriceInput.value,
  };
  productContainer.push(product);
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayProduct(productContainer);
  displayProductInHome();
}
function displayProduct(arr) {
  var container = ``;
  for (var i = 0; i < arr.length; i++) {
    container += `<tr>
        <td>${arr[i].Name}</td>
        <td>${arr[i].color}</td>
        <td>${arr[i].desc}</td>
        <td>${arr[i].price}</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>`;
  }
  if (t != null) t.innerHTML = container;
}
displayProductInHome();


function displayProductInHome() {
  var count = document.querySelectorAll(".div1").length+1;
  var containertwo = ``;
  for (var i = 0; i < productContainer.length; i++) {
    console.log(i);
    containertwo += `<div class="col-2 card div1">
        <div class="product-card">
          <div class="d-flex justify-content-center align-items-center">
            <img
              src="./images/products Images/${
                productContainer[i].image.split("\\")[2]
              }"
              alt="Product Image"
              class="product-image w-75" />
          </div>
          <h3>${productContainer[i].Name}</h3>
          <p>${productContainer[i].color}</p>
          <p>
            Description of the product goes here. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <p><strong>$ ${productContainer[i].price}</strong></p>
          <div class="d-flex flex-row justify-content-end pb-4">
            <button class="btn b1"  onclick="addToBag(${count})">Add to Bag</button>
          </div>
        </div>
      </div>
        `;
    count++;
  }
  if (r != null) r.innerHTML += containertwo;
}
