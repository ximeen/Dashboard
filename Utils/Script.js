  // MAKE THE EFFECT HOVERD IN "LI" USING JAVASCRIPT

  // TAKED LI IF DOOM
  let list = document.querySelectorAll('.Navgation li');

  // CREATING FUNCTION ACTIVE LINK WHERE WILL ADD AND REMOVE HOVERED
 function ActiveLink(event){
    list.forEach(x => x.classList.remove('hovered'))
    event.target.classList.add('hovered')
    
}

  // ADD EVENT TO MOUSEOVER!
  list.forEach(e => e.addEventListener('mouseover', ActiveLink));


  // MENU HAMBURGUER 

  const navegation = document.querySelector('.Navgation');
  const toggle = document.querySelector('.Toggle');
  const main = document.querySelector('main');


  toggle.onclick = () =>{
    navegation.classList.toggle('active');
    main.classList.toggle('active');

  }