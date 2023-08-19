// check if there are in localstoage
let cardsProductItemDom = document.querySelector(".card-items");
let badgeDom = document.querySelector(".badge");
let cardsProductsDom = document.querySelector(".cards-products");


let productInCardItem = [];
if (!localStorage.getItem("productInCard")){
  localStorage.setItem("productInCard",JSON.stringify(productInCardItem));

}
if(JSON.parse(localStorage.getItem("productInCard")).length === 0){
    localStorage.setItem("count", 0);

}
let addedItem = localStorage.getItem("productInCard")
? JSON.parse(localStorage.getItem("productInCard"))
: [];

if (addedItem) {
addedItem.map((item) => {
  cardsProductItemDom.innerHTML += `<div class="card-item">${item.title}  <p class="item-quantity"> ${item.qty}</p></div>`;
});

badgeDom.style.display = "block";
badgeDom.innerHTML = localStorage.getItem("count");

}
//Open cart menu

function apearitems() {
    if (localStorage.getItem("count") != 0) {
      if (cardsProductsDom.style.display == "block" && localStorage.getItem("count") != 0) {
        cardsProductsDom.style.display = "none";
      } else {
        cardsProductsDom.style.display = "block";
      }
    }
  }