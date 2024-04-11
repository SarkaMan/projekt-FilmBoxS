//vyberu vse co budu nejak menit
const tlacitkoElm = document.querySelector('#menu-tlacitko');
const polozkaElm = document.querySelector('#menu-polozky');
const fasElm = document.querySelector('.fas');

//vytvorim posluchac udalosti na tlacitko
const tlacitkoClick = () => {
  //pridani/odebrani tridy show
  if (polozkaElm.classList.contains('show')) {
    polozkaElm.classList.remove('show');
    fasElm.classList.remove('fa-xmark');
    fasElm.classList.add('fa-bars');
  } else {
    polozkaElm.classList.add('show');
    fasElm.classList.remove('fa-bars');
    fasElm.classList.add('fa-xmark');
  }
};

tlacitkoElm.addEventListener('click', tlacitkoClick);
