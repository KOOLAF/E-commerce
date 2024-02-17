function searchProducts() {
  var searchQuery = document.getElementById("searchInput").value.toLowerCase();
  var productCards = document.querySelectorAll(".product-card");
  var card = document.querySelectorAll(".div1");

  for (var i = 0; i < productCards.length; i++) {
    var productName = productCards[i]
      .querySelector("h3")
      .innerText.toLowerCase();
    if (productName.includes(searchQuery)) {
      productCards[i].style.display = "block";
    } else {
      productCards[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}

document
  .getElementById("searchInput")
  .addEventListener("input", searchProducts);
