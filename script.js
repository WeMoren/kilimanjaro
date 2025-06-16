const sideNav = document.getElementById("side-nav");
const openSideNav = document.querySelector(".fa-bars");
const closeSideNav = document.querySelector(".fa-close");

openSideNav.addEventListener("click", () => {
    sideNav.style.left = "0";
});

closeSideNav.addEventListener("click", () => {
    sideNav.style.left = "-300px";
});

window.onclick = (event) => {
    if(event.target === sideNav){
        sideNav.style.display = "none";
    }
  
}