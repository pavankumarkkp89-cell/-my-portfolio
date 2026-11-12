// ==============================
// TYPING ANIMATION
// ==============================

const typingElement = document.getElementById("typing");

const roles = [
  "Aspiring Java Developer",
  "Software Engineer",
  "Web Developer",
  "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent =
    currentRole.substring(0, charIndex);

  let speed = deleting ? 45 : 100;

  if (!deleting && charIndex === currentRole.length) {
    deleting = true;
    speed = 1400;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// DARK / LIGHT MODE
// ==============================

const themeBtn = document.getElementById("themeBtn");

function updateThemeButton() {

  const isDark = document.body.classList.contains("dark");

  themeBtn.textContent = isDark ? "☀" : "☾";

  themeBtn.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

updateThemeButton();

// Switch theme
themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const currentTheme =
    document.body.classList.contains("dark")
      ? "dark"
      : "light";

  localStorage.setItem("portfolio-theme", currentTheme);

  updateThemeButton();

});


// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("show");

  menuBtn.textContent =
    navLinks.classList.contains("show") ? "✕" : "☰";

});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("show");
    menuBtn.textContent = "☰";

  });

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements =
  document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

revealElements.forEach(element => {

  observer.observe(element);

});


// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections =
  document.querySelectorAll("section[id]");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm =
  document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const subject =
    document.getElementById("subject").value.trim();

  const message =
    document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {

    alert("Please fill in all fields.");

    return;

  }

  const recipient = "pedapatinikhil34@gmail.com";

  const emailSubject =
    encodeURIComponent(subject);

  const emailBody =
    encodeURIComponent(
      "Name: " + name +
      "\nEmail: " + email +
      "\n\nMessage:\n" + message
    );

  const mailtoLink =
    `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

  window.location.href = mailtoLink;

});


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log(
  "%c Welcome to Nikhil's Portfolio! ",
  "background:#ff7518;color:white;padding:10px;font-size:16px;"
);