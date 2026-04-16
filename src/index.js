import "./style.css";
import { loadPage } from "./page-load.js";

const homeButtons = document.querySelectorAll(".home");
const menuButtons = document.querySelectorAll(".menu");
const contactButtons = document.querySelectorAll(".contact");
const hamburger = document.querySelector(".hamburger-menu");
const dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("open");
  console.log("Hamburger clicked");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav")) {
    dropdown.classList.remove("open");
  }
});

homeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    loadPage("home");
  });
});

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    loadPage("menu");
  });
});

contactButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    loadPage("contact");
  });
});

loadPage("home");
