//define varible 
let products = JSON.parse(localStorage.getItem("products")) || productsDB ;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find(i => i.id == productId); //filter => array of obj //find => obj

let errorlist = document.querySelector("#error");
let productUpdateForm = document.querySelector("#updateForm ");
let productName = document.querySelector("#productName ");
let productDesc = document.querySelector("#productDesc ");
let productSize = document.querySelector("#productSize ");
let productSubmit = document.querySelector("#createBtn ");
let imageFile = document.querySelector("#uploadImageFile ");
let productImageUrl;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSize.value = getProduct.size;
productImageUrl=getProduct.imageUrl;

//Event
productSize.addEventListener('change' , getProductSize);
productUpdateForm.addEventListener("submit" , updateProductFun);
imageFile.addEventListener('change', uploadimage);

//Functions 
function getProductSize(e){
    productSizeValue = e.target.value;
}
function updateProductFun(e){
    e.preventDefault();
    console.log(productName.value);
    getProduct.title = productName.value ;
    getProduct.desc = productDesc.value  ;
    getProduct.size = productSize.value ;
    getProduct.imageUrl = productImageUrl ;
    
    localStorage.setItem("products",JSON.stringify(products));
    
    setTimeout( () => {
        window.location = "index.html";
        },1500);
}
function uploadimage(e){
    let file = this.files[0];
    error =[];
    console.log(file);
    let typeFiles = ["image/jpeg","image/png"];


    console.log(file.type);
    if (file.size > 2 * 1024 *1024){
        error.push("<p class=\"err\" >The file bigger than 2mb </p>");
        errorlist.innerHTML = error.join("<br>");
        return;
    }
    if(typeFiles.indexOf(file.type)){
        error.push("<p class=\"err\" >The file is not support</p>");
        errorlist.innerHTML = error.join("<br>");
        return;
    }

    getUrlImageBase64(file);
    // productImageUrl = URL.createObjectURL(file);

}

function getUrlImageBase64(file){
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function(){
        productImageUrl = reader.result;
    }
    reader.onerror = function(){
        error.push("<p class=\"err\" >Error 64 !</p>");
        errorlist.innerHTML = error.join("<br>");
        return;
    }
}