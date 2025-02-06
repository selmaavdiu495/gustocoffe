function validateForm(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function(event) {
        let valid = true;
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(function(input) {
            if (input.value === "") {
                valid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (!valid) {
            event.preventDefault();
            alert("Të gjitha fushat janë të detyrueshme!");
        }
    });
}

function initializeButtonClicks() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert("Butoni u shtyp!");
        });
    });
}

function initializeCarousel() {
    const carousel = document.getElementById('carouselExampleCaptions');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    setInterval(function() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }, 3000); 
}

function manageNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}



