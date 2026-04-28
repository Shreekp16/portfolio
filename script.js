const roles = [
  "Data Science",
  "Machine Learning",
  "Python Projects",
  "AI Solutions"
];

const roleText = document.getElementById("roleText");
let roleIndex = 0;

if (roleText) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.style.opacity = 0;

    setTimeout(() => {
      roleText.textContent = roles[roleIndex];
      roleText.style.opacity = 1;
    }, 220);
  }, 2200);
}








const skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach((box, index) => {
  box.style.opacity = "0";
  box.style.transform = "translateY(20px)";

  setTimeout(() => {
    box.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    box.style.opacity = "1";
    box.style.transform = "translateY(0)";
  }, 150 * index);
});





const roles = [
  "Data Science",
  "Machine Learning",
  "Python Projects",
  "AI Solutions"
];

const roleText = document.getElementById("roleText");
let roleIndex = 0;

if (roleText) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.style.opacity = 0;

    setTimeout(() => {
      roleText.textContent = roles[roleIndex];
      roleText.style.opacity = 1;
    }, 220);
  }, 2200);
}


// optional: subtle animation for skill badges (pulse effect staggered)
const badges = document.querySelectorAll(".skill-badge");

badges.forEach((badge, index) => {
  badge.style.opacity = "0";
  badge.style.transform = "translateY(6px)";

  setTimeout(() => {
    badge.style.transition = "all 0.4s ease";
    badge.style.opacity = "1";
    badge.style.transform = "translateY(0)";
  }, 200 * index);
});
