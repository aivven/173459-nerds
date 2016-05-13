
var link = document.querySelector(".footer-feedback .btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector(".modal-content form");
var author = popup.querySelector("[name=writer-name]");
var mail = popup.querySelector("[name=writer-email]");
var text = popup.querySelector("[name=writer-text]");

link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event){
 if (!author.value || !mail.value || !text.value) {
  event.preventDefault();
  popup.classList.add("modal-error");
 }
 else {
  event.preventDefault();
  popup.classList.remove("modal-content-show"); 
  popup.classList.remove("modal-error"); 
 }
});

window.addEventListener("keydown", function(event) {
 if (event.keyCode === 27) {
  if (popup.classList.contains("modal-content-show")){
   popup.classList.remove("modal-content-show");
  }
 }
});