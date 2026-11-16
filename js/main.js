
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



// =====================================
// JOURNEY - SHOW MORE / LESS
// =====================================

const showMoreButtons = document.querySelectorAll(".show-more");

showMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const extraContent = button.previousElementSibling;

        extraContent.classList.toggle("active");

        const isExpanded = extraContent.classList.contains("active");

        button.textContent = isExpanded ? "Show Less -" : "Show More +";

        button.setAttribute("aria-expanded", isExpanded);

    });

});


// =====================================
// JOURNEY - SCROLL ANIMATIONS
// =====================================

const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

timelineItems.forEach(function (item) {

    observer.observe(item);

});

