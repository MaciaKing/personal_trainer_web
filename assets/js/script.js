'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const translations = {
  es: {
    hero_subtitle: "Fuerza, ganancia muscular y pérdida de grasa con un entrenamiento adaptado a ti.",
    hero_title: "Entrenamiento personal. Resultados reales.",

    // nav_home: "Home",
    nav_about: "Sobre mí",
    nav_prices: "Precios",
    nav_contact: "Contacto",
    nav_review: "Review",

    // prices_title: "Mis Precios",
    // train_with_me: "Entrena conmigo",

    // plan1_title: "1 SESIÓN",
    // plan1_desc: "Entrenamiento 1 a 1 totalmente personalizado.",
    // plan1_badge: "Gym o exterior",

    // plan2_title: "2 SESIONES / SEMANA",
    // plan2_desc: "Ideal para progreso constante.",
    // plan2_badge: "Pago quincenal",

    // plan3_title: "3 SESIONES / SEMANA",
    // plan3_desc: "Transformación total.",
    // plan3_badge: "Plan recomendado",

    // online_title: "ONLINE COACHING",
    // online_desc: "Plan personalizado + seguimiento semanal",
    // online_badge: "Entrena desde cualquier lugar",

    // home_title: "ENTRENAMIENTO EN CASA",
    // home_desc: "Entrenamiento en tu edificio o domicilio.",
    // home_badge: "Comodidad total"
  },

  en: {
    hero_subtitle: "Strength, muscle and fat loss through personalized training adapted to you.",
    hero_title: "Personal training. Real Results.",
    section_text: "More strength. More health. More confidence. Train with me and become your best self with a program designed just for you.",
    
    nav_about: "About me",
    nav_prices: "Prices",
    nav_contact: "Contact",
    nav_review: "Reviews",

    // prices_title: "My Prices",
    // train_with_me: "Train With Me",

    // plan1_title: "1 SESSION",
    // plan1_desc: "Fully personalized 1-on-1 training.",
    // plan1_badge: "Gym or outdoor",

    // plan2_title: "2 SESSIONS / WEEK",
    // plan2_desc: "Perfect for steady progress.",
    // plan2_badge: "Bi-weekly payment",

    // plan3_title: "3 SESSIONS / WEEK",
    // plan3_desc: "Total body transformation.",
    // plan3_badge: "Recommended plan",

    // online_title: "ONLINE COACHING",
    // online_desc: "Custom plan + weekly follow-up",
    // online_badge: "Train from anywhere",

    // home_title: "AT HOME SESSION",
    // home_desc: "Training at your building or home.",
    // home_badge: "Total convenience"
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
}

// Mantener idioma guardado
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "es";
  changeLanguage(saved);
});


window.addEventListener("scroll", function () {
  const logo = document.getElementById("logo");

  if (window.scrollY > 50) {
    logo.src = "./assets/images/colete-logo.png"; // negro
  } else {
    logo.src = "./assets/images/colete-logo-blanco.png"; // blanco
  }
});