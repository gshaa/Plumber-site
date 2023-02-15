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

//form

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("send-email.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((message) => {
      alert(message);
      form.reset();
    })
    .catch((error) => console.error(error));
});
