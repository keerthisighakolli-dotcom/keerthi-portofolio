// ================= MOBILE MENU =================

const menuButton = document.getElementById("menu-button");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================= CLOSE MENU AFTER CLICK =================

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================= CURRENT YEAR =================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();