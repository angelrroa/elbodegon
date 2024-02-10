var swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    spaceBetween:80,
    grabCursor:true,
    loop:true,
    breakpoints:{
        991:{
            slidesPerView:3
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
});

function mostrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "block";
  }
  
  function cerrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
  }