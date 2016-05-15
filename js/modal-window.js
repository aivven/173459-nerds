  var link = document.querySelector(".footer-feedback .btn");
  var popup = document.getElementsByClassName("modal-content")[0];
  var close = popup.getElementsByClassName("modal-content-close")[0];
  var form = popup.getElementsByClassName("form")[0];
  var username = popup.getElementsByClassName("name")[0];
  var email = popup.getElementsByClassName("e-mail")[0];
  var storageusername = localStorage.getItem("name");
  var storageemail = localStorage.getItem("e-mail");
  var text = popup.getElementsByClassName("text")[0];

  link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage1 && storage2) {
      name.value = storageusername;
      email.value = storageemail;
      text.focus();
    } else {
      name.focus();
    }
  });

  close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!name.value || !email.value || !test.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("name", name.value);
      localStorage.setItem("e-mail", email.value);
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      }
    }
  });