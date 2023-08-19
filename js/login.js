let errorlist = document.querySelector("#error");

let username = document.querySelector("#username");
let password = document.querySelector("#password");

let login_btn = document.querySelector("#submit");

let getuser = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");

login_btn.addEventListener('click' , logIn)

function logIn(event){
    error = [];
    event.preventDefault();

    if(username.value === "" || password.value === "" ){
        error.push("<p class=\"err\" >Please fill data</p>")
        errorlist.innerHTML = error.join("<br>");
    }else{
        error=[];
        errorlist.innerHTML = error.join();

        chickValidatin();
        }
    }
function goToHome(){
    setTimeout( () => {
        window.location = "index.html";
        },1500);
}

function chickValidatin(){
    // event.preventDefault();

    if( getuser && getuser.trim() === username.value.trim() && getpassword && getpassword === password.value ){
        error=[];
        errorlist.innerHTML = error.join();
        
        goToHome();
        
    }else{
            error.push("<p class=\"err\" >Wrong Password or Username</p>")
            errorlist.innerHTML = error.join("<br>");
        }
}