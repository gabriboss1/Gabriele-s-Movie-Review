function toggleMenu() {
    var menu = document.getElementById('side-menu');
    menu.classList.toggle('open');
}

// Close the menu if the user clicks outside of it
document.addEventListener('click', function(event) {
    var menu = document.getElementById('side-menu');
    var menuIcon = document.querySelector('.menu-icon');
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('open');
    }
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function playTrailer() {
    document.querySelector('.trailer-overlay').style.display = 'none';
    document.querySelector('.trailer').style.display = 'block';
    document.getElementById('trailer').src += "&autoplay=1";
}