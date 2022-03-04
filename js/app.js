// navigator btns
let navigationKategori = document.querySelectorAll(".dropdown-item");
let iphoneBtn = document.querySelector("#iphone");
let macBtn = document.querySelector("#mac");
let watchBtn = document.querySelector("#watch");
let airpodsBtn = document.querySelector("#airpods");
let sportkiyimlariBtn = document.querySelector("#sportkiyimlari");
let uymebelariBtn = document.querySelector("#uymebelari");
let maishiytexnikaBtn = document.querySelector("#maishiytexnika");
let kiyimlarBtn = document.querySelector("#kiyimlar");
let shoppingImg = document.querySelector(".shoppingimg");
let shoppingInfo = document.querySelector(".shopping-info");

let mainHeroVidio = document.querySelector(".hero-vidio");
let hero1 = document.querySelector(".hero");
let heroInfoTitle = document.querySelector(".hero-info-title");
let heroImg = document.querySelector(".hero-img");
let mainHeroTitle = document.querySelector(".hero-info");
let cardImg = document.querySelectorAll(".card-img-top");
let productTitle = document.querySelector(".product-title");

// iphone
iphoneBtn.addEventListener("click", function () {
   heroImg.setAttribute("src", "img/iphone.webp");
   console.log(cardImg.length);
   for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].setAttribute("src", "img/iphone.webp");
   }
   shoppingImg.setAttribute("src", "img/iphone.webp");
   mainHeroTitle.textContent = "Iphone 13 Pro";
   shoppingInfo.textContent = "Iphone 13 Pro";
   productTitle.textContent = "Iphone 13 Pro";

});

// mac
macBtn.addEventListener("click", function () {
   heroImg.setAttribute("src", "img/mac.png");
   for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].setAttribute("src", "img/mac.png");
   }
   shoppingImg.setAttribute("src", "img/mac.png");
   productTitle.textContent = "MacBook Pro 16-inch";
   shoppingInfo.textContent = "MacBook Pro 16-inch";
   mainHeroTitle.textContent = "MacBook Pro 16-inch";
});

// watch
watchBtn.addEventListener("click", function () {
   heroImg.setAttribute("src", "img/iwatch7.webp");
   for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].setAttribute("src", "img/iwatch7.webp");
   }
   shoppingImg.setAttribute("src", "img/iwatch7.webp");
   productTitle.textContent = "iWatch Series 7";
   shoppingInfo.textContent = "iWatch Series 7";
   mainHeroTitle.textContent = "iWatch Series 7";
});

// airpods
airpodsBtn.addEventListener("click", function () {
   heroImg.setAttribute("src", "img/airpods.webp");
   for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].setAttribute("src", "img/airpods.webp");
   }
   shoppingImg.setAttribute("src", "img/airpods.webp");
   productTitle.textContent = "AirPods Series 3";
   shoppingInfo.textContent = "AirPods Series 3";
   mainHeroTitle.textContent = "AirPods Series 3";
});

// sportkiyimlari

sportkiyimlariBtn.addEventListener("click", function () {
   heroImg.setAttribute("src", "img/shoes.jpg");
   for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].setAttribute("src", "img/shoes.jpg");
   }
   shoppingImg.setAttribute("src", "img/shoes.jpg");
   shoppingInfo.textContent = "Nike";
   productTitle.textContent = "Nike";
   mainHeroTitle.textContent = "Nike";
});

// uymebelari
uymebelariBtn.addEventListener("click", function () {
   heroImg.setAttribute("src", "img/sofa.jpg");
   for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].setAttribute("src", "img/sofa.jpg");
   }
   shoppingImg.setAttribute("src", "img/sofa.jpg");
   productTitle.textContent = "Uy Mebellari";
   shoppingInfo.textContent = "Uy Mebellari";
   mainHeroTitle.textContent = "Uy Mebellari";
});

// maishiytexnika
maishiytexnikaBtn.addEventListener("click", function () {
   heroImg.setAttribute("src", "img/gas.jpeg");
   for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].setAttribute("src", "img/gas.jpeg");
   }
   shoppingImg.setAttribute("src", "img/gas.jpeg");
   shoppingInfo.textContent = "Maishiy Texnika";
   productTitle.textContent = "Maishiy Texnika";
   mainHeroTitle.textContent = "Maishiy Texnika";
});

// kiyimlar
kiyimlarBtn.addEventListener("click", function () {
   heroImg.setAttribute("src", "img/tshirt.jpg");
   for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].setAttribute("src", "img/tshirt.jpg");
   }
   shoppingImg.setAttribute("src", "img/tshirt.jpg");
   shoppingInfo.textContent = "Kiyimlar";
   productTitle.textContent = "Kiyimlar";
   mainHeroTitle.textContent = "Kiyimlar";
});

