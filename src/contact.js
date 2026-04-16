export function createContactSection() {
  const contactSection = document.createElement("section");
  contactSection.id = "contact";

  const contactTitle = document.createElement("h1");
  contactTitle.classList.add("contact__title");
  contactTitle.textContent = "Visit Us";

  contactSection.appendChild(contactTitle);

  return contactSection;
}
