const contentDiv = document.getElementById("content");
const homeSection = document.getElementById("home");
const menuSection = document.getElementById("menu");
const contactSection = document.getElementById("contact");

export function pageLoad() {
  contentDiv.innerHTML = "";
  loadHomeSection();
}

function createSection(id) {
  const section = document.createElement("section");
  section.id = id;
  return section;
}

function loadHomeSection() {
  const homeSection = createSection("home");

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("content__eyebrow");
  eyebrow.textContent = "EST. 1988 · TOKYO";
  homeSection.appendChild(eyebrow);

  const title = document.createElement("h1");
  title.classList.add("content__title");
  title.textContent = "Izakaya Maru";
  homeSection.appendChild(title);

  const tagline = document.createElement("p");
  tagline.classList.add("content__tagline");
  tagline.textContent = "Drinks, bites & good company";
  homeSection.appendChild(tagline);

  const viewMenu = document.createElement("button");
  viewMenu.classList.add("content__btn");
  viewMenu.textContent = "View Menu";
  homeSection.appendChild(viewMenu);

  contentDiv.appendChild(homeSection);
}

function loadMenuSection() {
  const menuSection = createSection("menu");

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu__title");
  menuTitle.textContent = "Our Menu";
  menuSection.appendChild(menuTitle);

  contentDiv.appendChild(menuSection);
}
function loadContactSection() {
  const contactSection = createSection("contact");

  const contactTitle = document.createElement("h1");
  contactTitle.classList.add("contact__title");
  contactTitle.textContent = "Visit Us";
  contactSection.appendChild(contactTitle);

  contentDiv.appendChild(contactSection);
}
