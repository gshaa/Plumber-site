//nav bar

$(document).ready(function () {
  $("#icon").click(function () {
    $("ul").toggleClass("show");
  });
});

$(document).ready(function () {
  $(".mobile-menu").click(function () {
    $("ul").removeClass("show");
  });
});

const logoToggleOverflow = () => {
  if (window.innerWidth < 1040) {
    document.body.style.overflow = document.body.style.overflow = "auto";
    $("ul").removeClass("show");
  }
};

const toggleOverflow = () => {
  if (window.innerWidth < 1040) {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
  }
};

// animation

const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
