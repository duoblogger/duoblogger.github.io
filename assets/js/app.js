const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.assign("https://duoblogger.github.io");
  //   alert("Hello niggas");
});

const secret = document.getElementById("secret-jinish");
var cnt = 0;
secret.addEventListener("click", () => {
  cnt++;
  if (cnt == 6 + 9) {
    logo.innerHTML = "BUODLOGGER";
  } else logo.innerHTML = "DUOBLOGGER";
});
