let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
   navbar.classList.toggle('active');
}

document.body.addEventListener('click', (event) => {
   // Check if the clicked element is not part of the navbar or menu button
   if (!navbar.contains(event.target) && event.target !== menuBtn) {
      navbar.classList.remove('active');
   }
});