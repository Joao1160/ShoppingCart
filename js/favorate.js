let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts")

function drawfavorateProductsUi(allproducts =[]){
  let products = JSON.parse(localStorage.getItem('productFavorate')) || allproducts ;
  if(products.length === 0){
    noProductsDom.style.display = "block";
  }
  let productsUi = products.map( (item) => {
      return `
      <div class="product-item">
          <img src="${item.imageUrl}" class="product-item-img" alt="image" />
          <div class="product-item-desc">
          <a onclick="saveItemData(${item.id})" >${item.title}</a>
          <p>${item.desc}</p>
            <span>Size : ${item.size} </span>
            <span>Quantity :<p class=\"quantity-price\"> ${item.qty}</p> </span>
          </div>
          <div class="product-item-action">
            <button class="add-to-card" onclick="removeFromCard(${item.id})" >Remove from favorate</button>
          </div>
      </div>
      `
  })
  productsDom.innerHTML = productsUi.join("");
}
drawfavorateProductsUi();
function removeFromCard (id){
  let productFavorate = localStorage.getItem('productFavorate');

  if(productFavorate){
    let items = JSON.parse(productFavorate);
    let filtersItem = items.filter( (item) => item.id !== id );
    localStorage.setItem("productFavorate",JSON.stringify(filtersItem));
    drawfavorateProductsUi(filtersItem);
  }
}
