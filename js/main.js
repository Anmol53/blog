const toggleTheme = (isDark) => {
  const r = document.querySelector(":root");
  if (isDark) {
    r.style.setProperty("--primaryColor", "#252A34");
    r.style.setProperty("--secondaryColor", "#bababa");
    r.style.setProperty("--accentColor", "#8ead43");
    r.style.setProperty("--accentLightColor", "#5b7227");
  } else {
    r.style.setProperty("--primaryColor", "#ffffff");
    r.style.setProperty("--secondaryColor", "#707070");
    r.style.setProperty("--accentColor", "#5e7656");
    r.style.setProperty("--accentLightColor", "#839f7a");
  }
};

const navSlide = () => {
  const ham = document.querySelector(".ham");
  const nav = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  ham.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    links.forEach((link, idx) => {
      link.style.animation = link.style.animation
        ? ""
        : `fade 0.5s ease-in forwards ${idx / 6 + 0.5}s`;
    });
    ham.classList.toggle("trigger");
  });
};

if (document.querySelector(".ham")) {
  navSlide();
}
