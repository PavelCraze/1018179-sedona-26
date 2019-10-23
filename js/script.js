var button=document.querySelector(".search-button");
var popup=document.querySelector(".open-search");
var indate = popup.querySelector("[name=indate]");
var outdate = popup.querySelector("[name=outdate]");

popup.classList.remove("open-search");
popup.classList.add("open-search-hide");

button.addEventListener("click",function(evt){
    popup.classList.contains("open-search-hide")?(evt.preventDefault(),
    popup.classList.remove("open-search-hide"),popup.classList.add("open-search")):(evt.preventDefault(),
    popup.classList.add("open-search-hide"),popup.classList.remove("open-search"), popup.classList.remove("modal-error") )
});

popup.addEventListener("submit", function (evt) {
    if (!indate.value || !outdate.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });









