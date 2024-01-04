var slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  slideIndex = slideIndex % slides.length
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  slideIndex = slideIndex + 1
  setTimeout(showSlides, 4000); // Change image every 2 seconds
} 