export function createContactSection() {
  const contactSection = document.createElement("section");
  contactSection.id = "contact";

  // helper to create a block
  function createContactBlock(titleText, icon, lines) {
    const block = document.createElement("div");
    block.classList.add("contact__block");

    const titleWrapper = document.createElement("div");
    titleWrapper.classList.add("contact__title-wrapper");

    const iconSpan = document.createElement("span");
    iconSpan.classList.add("contact__icon");
    iconSpan.textContent = icon;

    const title = document.createElement("h3");
    title.textContent = titleText;

    titleWrapper.append(iconSpan, title);

    block.appendChild(titleWrapper);

    lines.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      block.appendChild(p);
    });

    return block;
  }

  // create sections
  const location = createContactBlock("Location", "📍", [
    "3-14-2 Shinjuku",
    "Tokyo, Japan",
  ]);

  const reservations = createContactBlock("Reservations", "📞", [
    "+81 3-1234-5678",
    "info@yokocho.jp",
  ]);

  const hours = createContactBlock("Hours", "🕒", [
    "Mon – Sat: 17:00 – 01:00",
    "Sunday: Closed",
  ]);

  contactSection.append(location, reservations, hours);

  return contactSection;
}
