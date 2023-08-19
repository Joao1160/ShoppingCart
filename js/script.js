// Define Product
let productsDom = document.querySelector(".products");
let products =  productsDB ;
let drawProductsUi ;
(drawProductsUi = function (products = JSON.parse(localStorage.getItem("products"))) {
  let productsUi = products.map((item) => {
    return `
        <div class="product-item" style="${item.isme == 'Y' ? "border:2px solid #001C30 ;": "border:2px solid #4caf50" }" >
          <img src="${item.imageUrl}" class="product-item-img" alt="image" />
          <div class="product-item-desc">
            <a onclick="saveItemData(${item.id})" >${item.title}</a>
            <p>${item.desc}</p>
            <span>Size : ${item.size} </span>
          </div>
          <div class="product-item-action">
            <button class="add-to-card" onclick="addedToCard(${item.id})" >Add to card</button>
            <i class="fa-solid fa-heart" style="color:${item.liked == true ? "red;" : " ;"}" onclick="addedToFavorate(${item.id})"></i>
          </div>  
        </div>
        `;
  });
  productsDom.innerHTML = productsUi.join("");
})(JSON.parse(localStorage.getItem("products")) || products );


// add to cart
function addedToCard(id) {
  if (localStorage.getItem("username")) {
    let productsadd;
    if(localStorage.getItem("products")){
      productsadd= JSON.parse(localStorage.getItem("products")) ;
    }else{
      productsadd= products ;
    }
    let product = productsadd.find((item) => item.id === id);
    let isProductInCard = addedItem.some((i) => i.id === product.id);
    console.log(product,productsadd);
    if(isProductInCard){
      addedItem = addedItem.map( (p) => {
        if(p.id === product.id)  p.qty += 1;
        return p;
      })
    }else{
      addedItem.push(product);
    }


    cardsProductItemDom.innerHTML ="";
    addedItem.forEach((item) => {
      cardsProductItemDom.innerHTML += `<div class="card-item">${item.title}  <p class="item-quantity"> ${item.qty}</p></div>`;
    });
    
    let cartProductsItems = document.querySelectorAll(".card-items .card-item");
    
    // Save Data 
    localStorage.setItem("productInCard", JSON.stringify(addedItem)); // Convert obj to string and JSON.parse() conv str to obj
    
    // Add Counter of products
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductsItems.length;
    localStorage.setItem("count",cartProductsItems.length)
  } else {
    window.location = "login.html";
  }
}
// get uniqe id
function getuniqueid (array,filtertype){
  let unique = array
  .map((item) => item[filtertype]) 
  .map((item , i , finalarr) => finalarr.indexOf(item) === i && i)
  .filter((item) => array[item])
  .map((item) => array[item]);

  return unique;
}


// search Function 
let searchTitle = document.querySelector("#search");
searchTitle.addEventListener('keyup',function(e){
    search(e.target.value,JSON.parse(localStorage.getItem("products"))); 

  if(e.target.value.trim() === ''){
    drawProductsUi(JSON.parse(localStorage.getItem("products")));
  }
})
function search(title , productsSearch){
  let arr = productsSearch.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 );//content of title
  drawProductsUi(arr);

}


// add to Favorate
let favorateItems = localStorage.getItem("productFavorate")
? JSON.parse(localStorage.getItem("productFavorate"))
: [];
function addedToFavorate(id) {
  if (localStorage.getItem("username")) {
    let productsFav;
    if(localStorage.getItem("products")){
      productsFav= JSON.parse(localStorage.getItem("products")) ;
    }else{
      productsFav= products ;
    }

    let chooseItem =productsFav.find((item) => item.id === id);
    
    
    
 
    favorateItems = [...favorateItems, chooseItem];
    let uniqueProducts = getuniqueid(favorateItems,"id");
    localStorage.setItem("productFavorate", JSON.stringify(uniqueProducts)); // Convert obj to string and JSON.parse() conv str to obj
    productsFav.map((item) => {
      if (item.id === chooseItem.id){
        item.liked = true ;
      }})
      localStorage.setItem("products", JSON.stringify(productsFav)); // Convert obj to string and JSON.parse() conv str to obj
      drawProductsUi(productsFav);
  } else {
    window.location = "login.html";
  }
}
// Filter product 
let filterSize = document.querySelector("#filter-size");
filterSize.addEventListener('change',function(e){
    productFilterSize(e.target.value,JSON.parse(localStorage.getItem("products"))|| products); 
  // console.log(e.target.value);``
  if(e.target.value.trim() === "All"){
    drawProductsUi(JSON.parse(localStorage.getItem("products")));
  }
})
function productFilterSize(size , productsFilter){
  let arr = productsFilter.filter((item) => item.size === size);//content of size
  drawProductsUi(arr);

}

//Edit Product
function editProduct(id){
  localStorage.setItem("editProduct",id);

  window.location = "editproduct.html";
}
