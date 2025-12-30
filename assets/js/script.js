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

    nav_about: "Sobre mí",
    nav_prices: "Precios",
    nav_contact: "Contacto",
    nav_review: "Reseñas",

    about_me_title: "Sobre mí",
    about_me_subtitle: "Mi Historia",
    about_me_text: "Soy entrenador personal con más de 10 años de experiencia, especializado en fuerza, desarrollo físico y entrenamiento seguro y eficaz.<br>Trabajo con personas que buscan progresar de verdad, sin atajos. Cada programa se adapta a tus objetivos, nivel y estilo de vida.<br>Ofrezco entrenamiento presencial, a domicilio y online, con un enfoque claro en la técnica correcta, la progresión y resultados sostenibles. ",

    train_title: "Entrena conmigo",
    train_subtitle: "Mis precios",
    first_card: "1 Sesión",
    second_card: "2 Sesiones / semana <small>Pago quincenal</small>",
    third_card: "3 Sesiones / semana <small>Pago quincenal</small>",
    fourth_card: "Seguimiento online <small>Rutina personalizada + Seguimiento semanal</small>",
    five_card: "Sesión a domicilio <small>Entrena en el gimnasio de tu edificio</small>",

    contact_title: "Contacto",
    send_email: "Enviar",
    your_name: "Tu nombre",
    your_email: "Tu correo",
    your_message: "Tu mensaje",
    send_whatsapp: "Contactar por Whatsapp",
  },

  en: {
    hero_subtitle: "Strength, muscle and fat loss through personalized training adapted to you.",
    hero_title: "Personal training. Real Results.",
    section_text: "More strength. More health. More confidence. Train with me and become your best self with a program designed just for you.",
    
    nav_about: "About me",
    nav_prices: "Prices",
    nav_contact: "Contact",
    nav_review: "Reviews",

    about_me_title: "About me",
    about_me_subtitle: "My History",
    about_me_text: "I\’m a personal trainer with over 10 years of experience, focused on strength, physique development and safe, effective training.<br> I work with people who want real progress, not shortcuts. Every program is adapted to your goals, experience and lifestyle.<br> I offer 1-on-1 coaching in person, at home and online, with a clear focus on proper technique, progression and long-term results.",

    train_title: "Train with me",
    train_subtitle: "My prices",

    first_card: "1 Session",
    second_card: "2 Sessions per week <small>Biweekly payment</small>",
    third_card: "3 Sessions per week <small>Biweekly payment</small>",
    fourth_card: "Online tracking <small>Personalized routine + Weekly follow-up</small>",
    five_card: "Home session <small>Work out at your building's gym</small>",

    contact_title: "Contact",
    send_email: "Send",
    your_name: "Your name",
    your_email: "Your email",
    your_message: "Your message",
    send_whatsapp: "Contact via WhatsApp",
  }
};

function changeLanguage(lang) {
  // Traducción texto
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  // Traducción placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  updateImages(lang);

  localStorage.setItem("lang", lang);
}



function updateImages(lang) {
  document.querySelectorAll(".price-img").forEach(img => {
    const es = img.getAttribute("data-img-es");
    const en = img.getAttribute("data-img-en");

    img.src = (lang === "es") ? es : en;
  });
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