//define varible 
let products = JSON.parse(localStorage.getItem("products")) || productsDB ;
let profileUsername = localStorage.getItem("username") ;
let profileEmail = localStorage.getItem("email") ;

let errorlist = document.querySelector("#error") ;
let editProfileForm = document.querySelector("#edit-profile-form ") ;
let changeName = document.querySelector("#changeName ") ;
let changeEmail = document.querySelector("#changeEmail ") ;
let EditSubmit = document.querySelector("#EditBtn ") ;
let imageFile = document.querySelector("#uploadImageFile ") ;
let imageAvatarFile ;
let profileImageUrl ;

changeName.value = profileUsername ;
changeEmail.value = profileEmail ;

//Event
editProfileForm.addEventListener("submit" , editProfileFun) ;
imageFile.addEventListener('change', uploadimage) ;

//Functions
function editProfileFun(e){
    e.preventDefault() ;
    localStorage.setItem("username",changeName.value) ;
    localStorage.setItem("email",changeEmail.value) ;   
    localStorage.setItem("profileImageUrl",profileImageUrl) ;
    
    setTimeout( () => {
        window.location = "profile.html" ;
        },1500) ;
}

function uploadimage(e){
    let file = this.files[0] ;
    error = [] ;
    console.log(file) ;
    let typeFiles = ["image/jpeg","image/png"] ;


    console.log(file.type) ;
    if (file.size > 2 * 1024 *1024){
        error.push("<p class=\"err\" >The file bigger than 2mb </p>") ;
        errorlist.innerHTML = error.join("<br>") ;
        return ;
    }

    if(typeFiles.indexOf(file.type)){
        error.push("<p class=\"err\" >The file is not support</p>") ;
        errorlist.innerHTML = error.join("<br>") ;
        return ;
    }

    getUrlImageBase64(file) ;

}

function getUrlImageBase64(file){
    let reader = new FileReader() ;

    reader.readAsDataURL(file) ;

    reader.onload = function(){
        profileImageUrl = reader.result ;
    }
    reader.onerror = function(){
        error.push("<p class=\"err\" >Error 64 !</p>") ;
        errorlist.innerHTML = error.join("<br>") ;
        return ;
    }
}