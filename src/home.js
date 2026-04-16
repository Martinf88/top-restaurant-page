import { loadPage } from "./page-load.js";

export function createHomeSection() {
  const homeSection = document.createElement("section");
  homeSection.id = "home";

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("content__eyebrow");
  eyebrow.textContent = "EST. 1988 · TOKYO";

  const title = document.createElement("h1");
  title.classList.add("content__title");
  title.textContent = "横丁酒場";

  const subtitle = document.createElement("p");
  subtitle.classList.add("content__subtitle");
  subtitle.textContent = "Yokochō Sakaba";

  const tagline = document.createElement("p");
  tagline.classList.add("content__tagline");
  tagline.textContent = "Drinks, bites & good company";

  const viewMenu = document.createElement("button");
  viewMenu.classList.add("content__btn");
  viewMenu.textContent = "View Menu";
  viewMenu.addEventListener("click", () => {
    loadPage("menu");
  });

  homeSection.append(eyebrow, title, subtitle, tagline, viewMenu);

  return homeSection;
}
