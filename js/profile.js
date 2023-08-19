//get varible from localstorage
let profileUsername = localStorage.getItem("username");
let profileEmail = localStorage.getItem("email");

let productsCountDB = JSON.parse(localStorage.getItem("products")) || productsDB ;
let lengthOfMyProduct = 0 ;
productsCountDB.map((item) => {
    if(item.isme === 'N'){
        lengthOfMyProduct++;
    }
}
 )
// varibles
document.getElementById("username").innerHTML = profileUsername;
document.getElementById("email").innerHTML = profileEmail;
if(localStorage.getItem("profileImageUrl")){
    document.getElementById("profileImageUrl").src=localStorage.getItem("profileImageUrl");
}
if(lengthOfMyProduct != 0){
    document.querySelector("#productsLength span").innerHTML = lengthOfMyProduct;
}else{
    document.querySelector("#productsLength").remove();
}