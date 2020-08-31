const cookieE1 = document.querySelector(".cookie-book");
const okE1 = document.querySelector(".ok");

okE1.addEventListener("click", () => {
  cookieE1.style.display = "none";
});

let cookies = () => {
  if (!Cookies.get("hide-cookie")) {
    setTimeout(() => {
      cookieE1.style.display = "block";
    }, 1000);
  }
  Cookies.set("hide-cookie", "true", {
    expires: 30,
  });
};

cookies();
