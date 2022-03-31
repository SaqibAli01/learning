let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav');

menu.onclick = () =>{

  menu.classList.toggle('menu-bar');
  navbar.classList.toggle('active');

}
