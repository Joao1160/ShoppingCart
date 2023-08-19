//define varible 
let errorlist = document.querySelector("#error");
let productCreateForm = document.querySelector("#createForm ");
let productName = document.querySelector("#productName ");
let productDesc = document.querySelector("#productDesc ");
let productSize = document.querySelector("#productSize ");
let productSubmit = document.querySelector("#createBtn ");
let imageFile = document.querySelector("#uploadImageFile ");
let productImageUrl;
let productSizeValue;

//Event
productSize.addEventListener('change' , getProductSize);
productCreateForm.addEventListener("submit" , createProductFun);
imageFile.addEventListener('change', uploadimage);
//Functions 
function getProductSize(e){
    productSizeValue = e.target.value;
}
function createProductFun(e){
    e.preventDefault();
    error = [];
    if (localStorage.getItem("username")) {
        let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;

    if(productName.value === "" || productDesc.value === "" ||productSize.value === "" ){
        error.push("<p class=\"err\" >Please fill data</p>");
        errorlist.innerHTML = error.join("<br>");
    }else{
        let obj = {
            id: allProducts ? allProducts.length+1 : 1,
            title: nameValue,
            size: productSizeValue ,
            desc:descValue ,
            imageUrl: productImageUrl,
            qty: 1,
            isme : "N"
        }
    
        let newProducts = allProducts ? [...allProducts , obj] : [obj];
        localStorage.setItem("products",JSON.stringify(newProducts));
    
        productName.value = "";
        productDesc.value = "";
        productSize.value = "";
        imageFile.value = "";

        setTimeout( () => {
            window.location = "index.html";
            },500);

    }
    }else{
        window.location = "login.html";

    }

    
}
function uploadimage(e){
    let file = this.files[0];
    error =[];
    console.log(file);
    let typeFiles = ["image/jpeg","image/png"];

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