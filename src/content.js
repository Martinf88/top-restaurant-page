const contentDiv = document.getElementById("content");
const homeSection = document.getElementById("home");
const menuSection = document.getElementById("menu");
const contactSection = document.getElementById("contact");

export function createHome() {
  const eyebrow = document.createElement("p");
  eyebrow.classList.add("content__preTitle");
  eyebrow.textContent = "EST. 1997 - Florence";
  homeSection.appendChild(eyebrow);

  const title = document.createElement("h1");
  title.classList.add("content__title");
  title.textContent = "La Tavola";
  homeSection.appendChild(title);

  const tagline = document.createElement("p");
  tagline.classList.add("content__tagline");
  tagline.textContent = "Where tradition meets the table";
  homeSection.appendChild(tagline);

  const viewMenu = document.createElement("button");
  viewMenu.classList.add("content__btn");
  viewMenu.textContent = "View Menu";
  homeSection.appendChild(viewMenu);

  contentDiv.appendChild(homeSection);
}

export function createMenu() {
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu__title");
  menuTitle.textContent = "Our Menu";
  menuSection.appendChild(menuTitle);

  contentDiv.appendChild(menuSection);
}
export function createContact() {
  const contactTitle = document.createElement("h1");
  contactTitle.classList.add("contact__title");
  contactTitle.textContent = "Visit Us";
  contactSection.appendChild(contactTitle);

  contentDiv.appendChild(contactSection);
}
