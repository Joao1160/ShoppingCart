let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts")

function drawCartProductsUi(allproducts =[]){
  let products = JSON.parse(localStorage.getItem('productInCard')) || allproducts ;
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
            <button class="add-to-card" onclick="removeFromCard(${item.id})" >Remove from card</button>
          </div>
      </div>
      `
  })
  productsDom.innerHTML = productsUi.join("");
}
drawCartProductsUi();
function removeFromCard (id){
  let productsInCard = localStorage.getItem('productInCard');

  if (productsInCard){
    let items = JSON.parse(productsInCard);
    let filtersItem = items.filter( (item) => item.id !== id );
    localStorage.setItem("productInCard",JSON.stringify(filtersItem));
    drawCartProductsUi(filtersItem);
    let newCount =  JSON.parse(localStorage.getItem("count"))-1;
    localStorage.setItem("count",newCount);
    window.location.reload();
  }
}
