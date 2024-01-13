const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn"),
  navOpenSubBtn = document.querySelector(".navOpenSubBtn"),
  subMenu = document.querySelector(".sub-menu");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  nav.classList.remove("openSub");
  subMenu.classList.remove("openSub");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  subMenu.classList.remove("open Sub");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

navOpenSubBtn.addEventListener("click", () => {
  subMenu.classList.toggle("openSub");
});
