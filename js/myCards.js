let drawProductsUi ;
(drawProductsUi = function (products = []) {
    
    let productsDom = document.querySelector(".products");
    let noProductsDom = document.querySelector(".noProducts")
    let myProducts = products.filter((item) => item.isme ==='N');
    if(myProducts.length === 0){
        noProductsDom.style.display = "block";
    }

        let productsUi = myProducts.map( (item) => {
            return `
            <div class="product-item">
            <img src="${item.imageUrl}" class="product-item-img" alt="image" />
            <div class="product-item-desc">
            <a onclick="saveItemData(${item.id})" >${item.title}</a>
            <p>${item.desc}</p>
            <span>Size : ${item.size} </span>
            <button class='btn-edit' onclick='editProduct(${item.id})'>Edit Product</button>
            </div>
            <button class="deleteProduct"  onclick="deleteProduct(${item.id})" >Delete Product</button>
            </div>
        `
        })
            productsDom.innerHTML = productsUi.join("");
        
})(JSON.parse(localStorage.getItem("products")) || productsDB );

//delete product
function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem("products")) || productsDB ;
    let filteredProduct = products.filter((item) => item.id !== id);
    JSON.stringify(localStorage.setItem("products",JSON.stringify(filteredProduct)));
    let myProducts = filteredProduct.filter((item) => item.isme ==='N');
    drawProductsUi(myProducts);

    let productInCard=JSON.parse(localStorage.getItem("productInCard"));
    if(productInCard.length !== 0){
        let filteredProduct = productInCard.filter((item) => item.id !== id);
        JSON.stringify(localStorage.setItem("productInCard",JSON.stringify(filteredProduct)));
        let newCount =  JSON.parse(localStorage.getItem("count"))-1;
        localStorage.setItem("count",newCount);
        window.location.reload()
    }
}

//Edit Product
function editProduct(id){
    localStorage.setItem("editProduct",id);
  
    window.location = "editproduct.html";
  }