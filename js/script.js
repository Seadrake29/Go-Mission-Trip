const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (Number(window.scrollY) >= 100) {
    header.classList.add("blue");
  } else {
    header.classList.remove("blue");
  }
});
