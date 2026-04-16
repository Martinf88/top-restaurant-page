export function createMenuSection() {
  const menuSection = document.createElement("section");
  menuSection.id = "menu";

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu__title");
  menuTitle.textContent = "Our Menu";

  menuSection.appendChild(menuTitle);

  return menuSection;
}
