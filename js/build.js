'use strict';

;(function () {
    "use strict";

    var controls = document.querySelectorAll('.controls');
    for (var i = 0; i < controls.length; i++) {
        controls[i].style.display = 'inline-block';
    }

    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 4000);

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        slides[currentSlide].className = 'slide';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function () {
        clearInterval(slideInterval);

        nextSlide();
        slideInterval = setInterval(nextSlide, 4000);
    };
    previous.onclick = function () {
        clearInterval(slideInterval);
        previousSlide();
        slideInterval = setInterval(nextSlide, 4000);
    };
})();