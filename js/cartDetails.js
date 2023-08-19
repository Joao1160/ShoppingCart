let products = JSON.parse(localStorage.getItem("products")) || productsDB ;
let productsId = localStorage.getItem("productsId");
let itemDom = document.querySelector(".item-details");

let productDetails = products.find((item) => item.id == productsId );

itemDom.innerHTML = `
    <img src="${productDetails.imageUrl}" alt="this is image">
    <div class="item-desc">
    <h2>${productDetails.title}</h2>
    <span>Description : ${productDetails.desc}</span><br>
    <span>Size : ${productDetails.size}</span><br>
    <span>Quantity : ${productDetails.qty}</span>
    <button class='btn-edit' style="margin:10px 0;" onclick='editProduct(${productDetails.id})'>Edit Product</button>
    </div>


`
//Edit Product
function editProduct(id){
    localStorage.setItem("editProduct",id);
  
    window.location = "editproduct.html";
  }