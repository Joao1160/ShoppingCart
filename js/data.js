let productsDB = [
    {
      id: 1,
      title: "Headphone Item",
      desc:"Lorem ipsum dolor sit amet.",
      size: "Large",
      imageUrl: "images/headphone.jpg",
      qty: 1,
      isme : "Y"
    },
    {
      id: 2,
      title: "Watch Item",
      desc:"Lorem ipsum dolor sit amet.",
      size: "Small",
      imageUrl: "images/watch.jpg",
      qty: 1,
      isme : "Y"
    },
    {
      id: 3,
      title: "Mouse Item",
      desc:"Lorem ipsum dolor sit amet.",
      size: "Medium",
      imageUrl: "images/mouse.jpg",
      qty: 1,
      isme : "Y"
    },
    {
      id: 4,
      title: "Laptop Item",
      desc:"Lorem ipsum dolor sit amet.",
      size: "Large",
      imageUrl: "images/laptop.jpg",
      qty: 1,
      isme : "Y"
    },
    {
      id: 5,
      title: "Keyboard Item",
      desc:"Lorem ipsum dolor sit amet.",
      size: "Small",
      imageUrl: "images/keyboard.jpg",
      qty: 1,
      isme : "Y"
    },
  ];
if(localStorage.getItem("products")){
  console.log("right");
}else{
  localStorage.setItem("products",JSON.stringify(productsDB));
}
