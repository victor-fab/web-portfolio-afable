// Wait for the page to load before running any scripts
document.addEventListener('DOMContentLoaded', function() {
 
    /*--- Navbar Toggle ---*/
    var togglebtn = document.querySelector(".togglebtn");
    var nav = document.querySelector(".navlinks");
 
    if (togglebtn && nav) { // Check if elements exist before adding listener
        togglebtn.addEventListener("click", function() {
            this.classList.toggle("click");
            nav.classList.toggle("open");
        });
    }

    /*--- Typed.js Animation ---*/
    var typedElement = document.querySelector(".input");
    if(typedElement){
    var typed = new Typed(".input", {
        strings: ["Frontend Developer", "UX Designer", "Web Developer"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true
    });
    }
    /*--- Parallax Scroll Effect ---*/
    const parallax = document.querySelector('.parallax');
 
    if (parallax) {
        window.addEventListener('scroll', function() {
            // Get the element's position relative to the top of the viewport
            let elementTopInViewport = parallax.getBoundingClientRect().top;

            // Apply the "delay" by moving the background at 30% of the element's scroll
            // You can change 0.3 to 0.2 (slower) or 0.5 (faster)
            parallax.style.backgroundPositionY = (elementTopInViewport * 0.5) + 'px';
        });
    }

/*--- Parallax Scroll Effect (for dotes.html) ---*/
    // (This new block will only run on dotes.html)
    const parallaxClips = document.querySelectorAll('.parallax-clip');
 
    if (parallaxClips.length > 0) {
        window.addEventListener('scroll', function() {
            // Loop through each clip section
            parallaxClips.forEach(function(clip) {
                let elementTopInViewport = clip.getBoundingClientRect().top;
                // Apply the delay effect
                clip.style.backgroundPositionY = (elementTopInViewport * 0.3) + 'px';
            });
        });
    }

});