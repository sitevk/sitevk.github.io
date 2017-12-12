var link = document.querySelector(".main-nav__user-login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content__close");
var login = popup.querySelector("[name=user-login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=user-password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
   event.preventDefault();
   popup.classList.toggle("modal-content__show");
   if (storage) {
   	 login.value = storage;
   	 password.focus();
   }else{
     login.focus();
   }  
});

close.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("modal-content__show");
});

form.addEventListener("submit", function(event){
	if (!login.value || !password.value){
		event.preventDefault();
	} else{
		localStorage.setitem("login", login.value);
	}
});

window.addEventListener("keydown", function(event){
   if (event.keyCode === 27){
   	if (popup.classList.contains("modal-content__show")){
   		popup.classList.remove("modal-content__show");
   	}
   }
});


