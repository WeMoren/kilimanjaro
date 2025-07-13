const sideNav = document.getElementById("side-nav-wrapper");
const openSideNav = document.querySelector(".fa-bars");
const closeSideNav = document.querySelector(".fa-close");

openSideNav.addEventListener("click", () => {
    sideNav.style.left = "0";
});

closeSideNav.addEventListener("click", () => {
    sideNav.style.left = "-100vw";
});

window.onclick = (event) => {
    if(event.target === sideNav){
        sideNav.style.left = "-100vw";
    }
  
}