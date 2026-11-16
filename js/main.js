
// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile navigation
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Update accessibility state
    const isExpanded = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);

});

// Close menu after clicking a navigation link
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =====================================
// DYNAMIC COPYRIGHT YEAR
// =====================================

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
