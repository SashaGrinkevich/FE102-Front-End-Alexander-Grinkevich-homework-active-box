// слайдер
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  },
});

// бургер меню

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open")
    document.body.classList.toggle("lock")
  })
});
