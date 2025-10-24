let menu = document.querySelector('.b');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
menu.classList.toggle('b');
navbar.classList.toggle('open')
}