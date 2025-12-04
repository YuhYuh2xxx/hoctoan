document.querySelectorAll(".header__link").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Remove active class from all links
    document.querySelectorAll(".header__link").forEach((item) => {
      item.classList.remove("header__link--active");
    });

    // Add active class to clicked link
    this.classList.add("header__link--active");
  });
});

// Set active link on page load based on current URL
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".header__link").forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("header__link--active");
    } else {
      link.classList.remove("header__link--active");
    }
  });
});
