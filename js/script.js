var button=document.querySelector(".search-button")
var popup=document.querySelector(".open-search");

button.addEventListener("click",function(evt){
    popup.classList.contains("open-search-hide")?(evt.preventDefault(),
    popup.classList.remove("open-search-hide"),popup.classList.add("open-search")):(evt.preventDefault(),
    popup.classList.add("open-search-hide"),popup.classList.remove("open-search") )
});