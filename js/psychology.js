// MENU SHOW SCRIPT
function openMenu(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('desktop-menu-expanded').classList.toggle('show-desktop-menu');
        document.getElementById('chevron-icon').classList.toggle('rotate180');
    } else {
        document.getElementById("desktop-nav").classList.toggle("relative");
        document.getElementById('desktop-menu-expanded').classList.toggle('show-desktop-menu');
    }
}

// SCROLLING NAV FUNCTION
window.onscroll = function() {bgFunction()};
        function bgFunction(){
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("desktop-nav").classList.add('nav-bg');
                document.getElementById("desktop-nav").classList.add('fixed-top');
                document.getElementById("logo-nav").src="/raw_files/templates/psychology/assets/logo-white.png";
            } else {
                // document.getElementById("desktop-nav").style.background = "none";
                document.getElementById("desktop-nav").classList.remove('fixed-top');
                document.getElementById("desktop-nav").classList.remove('nav-bg');
                document.getElementById("logo-nav").src="/raw_files/templates/psychology/assets/logo.png";
            }
        }  


// MOUSEMOVE
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});
window.addEventListener("mousemove", (e) => {
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--y", e.layerY + "px");
  });
