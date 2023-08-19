// Register User

let errorlist = document.querySelector("#error");

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let register_btn = document.querySelector("#submit");

register_btn.addEventListener('click' , register)

function register(event) {
    error = [];
    event.preventDefault();

    if(username.value === "" || email.value === "" ||password.value === "" ){
        error.push("<p class=\"err\" >Please fill data</p>");
        errorlist.innerHTML = error.join("<br>");
    }else{
        error=[];
        errorlist.innerHTML = error.join();

        localStorage.setItem('username',username.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);

        goToLogIn();
        }
}
function goToLogIn(){
    setTimeout( () => {
        window.location = "login.html";
        },1500);
}
