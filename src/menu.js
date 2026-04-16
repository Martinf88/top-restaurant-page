export function createMenuSection() {
  const menuSection = document.createElement("section");
  menuSection.id = "menu";

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu__title");
  menuTitle.textContent = "Menu";

  menuSection.appendChild(menuTitle);

  // helper for menu items
  function createMenuItem(name, description, price) {
    const item = document.createElement("div");
    item.classList.add("menu__item");

    const header = document.createElement("div");
    header.classList.add("menu__item-header");

    const title = document.createElement("h3");
    title.classList.add("menu__item-title");
    title.textContent = name;

    const priceEl = document.createElement("span");
    priceEl.classList.add("menu__item-price");
    priceEl.textContent = price;

    header.append(title, priceEl);

    const desc = document.createElement("p");
    desc.classList.add("menu__item-desc");
    desc.textContent = description;

    item.append(header, desc);

    return item;
  }

  // izakaya-style dishes
  const items = [
    createMenuItem(
      "Yakitori",
      "Grilled chicken skewers glazed with tare sauce",
      "¥180",
    ),
    createMenuItem(
      "Gyoza",
      "Pan-fried dumplings with pork and cabbage",
      "¥350",
    ),
    createMenuItem(
      "Karaage",
      "Japanese fried chicken with lemon and mayo",
      "¥420",
    ),
    createMenuItem("Edamame", "Steamed soybeans with sea salt", "¥150"),
    createMenuItem(
      "Takoyaki",
      "Octopus balls with bonito flakes and sauce",
      "¥400",
    ),
  ];

  items.forEach((item) => menuSection.appendChild(item));

  return menuSection;
}
