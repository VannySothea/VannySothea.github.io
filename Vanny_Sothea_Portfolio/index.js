const toggle = document.getElementById("toggle");
const imageToChange = document.getElementById("imageToChange");
const logoToChange = document.getElementById("logoToChange");
const theme = window.localStorage.getItem("theme");
if (theme === "dark") {
   document.body.classList.add("dark-mode");
   toggle.checked = true;
   imageToChange.src = "/Thea_Photos/programmer-white.png"
   logoToChange.src = "/Thea_Photos/t-white.png"
}
 // Check the theme stored in localStorage and apply it to the body
toggle.addEventListener("click", () => {
   // Toggle the dark-mode class on the body
   document.body.classList.toggle("dark-mode");
   // Store the current theme in localStorage
   if (document.body.classList.contains("dark-mode")) {
      window.localStorage.setItem("theme", "dark");
      imageToChange.src = "/Thea_Photos/programmer-white.png"
      logoToChange.src = "/Thea_Photos/t-white.png"
    } else {
      window.localStorage.setItem("theme", "light");
      imageToChange.src = "/Thea_Photos/programmer-black.png"
      logoToChange.src = "/Thea_Photos/t-black.png" 
    }
});