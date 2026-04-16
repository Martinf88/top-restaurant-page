import { createHomeSection } from "./home.js";
import { createMenuSection } from "./menu.js";
import { createContactSection } from "./contact.js";

const contentDiv = document.getElementById("content");

export function loadPage(section) {
  contentDiv.innerHTML = "";

  let page;

  if (section === "home") {
    page = createHomeSection();
  } else if (section === "menu") {
    page = createMenuSection();
  } else if (section === "contact") {
    page = createContactSection();
  }

  contentDiv.appendChild(page);
}
