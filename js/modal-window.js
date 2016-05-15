  var link = document.querySelector(".footer-feedback .btn");
  var popup = document.getElementsByClassName("modal-content")[0];
  var close = popup.getElementsByClassName("modal-content-close")[0];
  var form = popup.getElementsByClassName("form")[0];
  var username = popup.getElementsByClassName("name")[0];
  var email = popup.getElementsByClassName("e-mail")[0];
  var text = popup.getElementsByClassName("text")[0];

  link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");

    if (storage) {
      username.value = storage;
      password.focus();
    } else {
      email.focus();
    }
  });

  close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
      }
    }
  });