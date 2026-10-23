// Personalize the values in this file before publishing.
const portfolioConfig = {
  name: "Sohel Maniyar",
  email: "sohelmaniyar3737@gmail.com", // Replace with your real email
  github: "https://github.com/sohelmaniyar3737-tech" // Replace with your GitHub profile
};

document.title = `${portfolioConfig.name} | Web Developer Portfolio`;

const emailLink = document.getElementById("emailLink");
const githubLink = document.getElementById("githubLink");
if (emailLink) emailLink.href = `mailto:${portfolioConfig.email}`;
if (githubLink) githubLink.href = portfolioConfig.github;

document.querySelectorAll(".logo").forEach((logo) => {
  const text = logo.querySelectorAll("span")[1];
  if (text) text.innerHTML = `${portfolioConfig.name}<span class="accent">.</span>`;
});
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const progress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progress) progress.style.width = `${percent}%`;
  if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 450);
}
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();
if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}
