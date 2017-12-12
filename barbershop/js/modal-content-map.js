var mapOpen = document.querySelector(".btn__open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content__close");

mapOpen.addEventListener("click", function(event) {
   event.preventDefault();
   mapPopup.classList.add("modal-content__show");  
});

mapClose.addEventListener("click", function(event){
	event.preventDefault();
	mapPopup.classList.remove("modal-content__show");
});

window.addEventListener("keydown", function(event){
   if (event.keyCode === 27){
   	if (mapPopup.classList.contains("modal-content__show")){
   		mapPopup.classList.remove("modal-content__show");
   	}
   }
});

