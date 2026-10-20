// WhatsApp number for enquiries, in international format without "+" (e.g. "919876543210").
// Leave empty until the number is known; the form then shows a message instead.
const WHATSAPP = "";

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => menuBtn.setAttribute("aria-expanded", nav.classList.toggle("open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }));

// Highlight the nav link of the section on screen
const links = [...nav.querySelectorAll("a")];
const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
function setActive() {
  let cur = sections[0];
  sections.forEach((s) => { if (s.getBoundingClientRect().top <= 120) cur = s; });
  links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur.id));
}
addEventListener("scroll", setActive, { passive: true });
setActive();

// Quote form: opens WhatsApp with the enquiry filled in
document.getElementById("quote").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const note = document.getElementById("note");
  if (!WHATSAPP) { note.textContent = "Thank you! Our contact number will be added here shortly."; return; }
  const body = `IICE WAALL enquiry\nName: ${f.get("name")}\nCompany: ${f.get("company")}\nPhone: ${f.get("phone")}\nProduct: ${f.get("product")}\n\n${f.get("message")}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
  note.textContent = "WhatsApp will open with your enquiry. Just tap Send.";
});

document.getElementById("yr").textContent = new Date().getFullYear();
