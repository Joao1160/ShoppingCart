// Save Data function
function saveItemData(id){
    localStorage.setItem("productsId",id);
    window.location = 'cartDetails.html';
  }