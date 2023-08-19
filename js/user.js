
let userinfo = document.querySelector("#user-info");
let userdom = document.querySelector("#user");
let links = document.querySelector("#links");

let logout_btn = document.querySelector("#logout");

let username = localStorage.getItem('username');

if (username){
    links.remove();
    userinfo.style.display ="flex";
    userdom.innerHTML = `Username : ${username}`;
}
logout_btn.addEventListener('click', removeAndLogOut);

function removeAndLogOut(){
    localStorage.clear();
    setTimeout(() => {
        window.location = 'register.html';
    }, 1500);
}
