// const btnHamburger = document.querySelector('#btnHamburger');
// const body = document.querySelector('body');
// const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
// const fadeElems = document.querySelectorAll('.has-fade');

// btnHamburger.addEventListener('click', function(){
//   console.log('click hamburger');

//   if(header.classList.contains('open')){ // Close Hamburger Menu
//     body.classList.remove('noscroll');
//     header.classList.remove('open');    
//     fadeElems.forEach(function(element){
//       element.classList.remove('fade-in');
//       element.classList.add('fade-out');
//     });
    
//   }
//   else { // Open Hamburger Menu
//     body.classList.add('noscroll');
//     header.classList.add('open');
//     fadeElems.forEach(function(element){
//       element.classList.remove('fade-out');
//       element.classList.add('fade-in');
//     });

//   }  
// });

const body = document.querySelector('body');

const btnProduct = document.querySelector('#btnProduct');
const dpnProduct = document.querySelector('#dpnProduct');

const btnCompany = document.querySelector('#btnCompany');
const dpnCompany = document.querySelector('#dpnCompany');

const btnConnect = document.querySelector('#btnConnect');
const dpnConnect = document.querySelector('#dpnConnect');

btnProduct.addEventListener('click', e => {
  e.stopPropagation();

  if (btnProduct.classList.contains('toggled')) {
    btnProduct.classList.remove('toggled');
    dpnProduct.classList.remove('show');
  } else {
    btnProduct.classList.add('toggled');
    dpnProduct.classList.add('show');

    if (btnCompany.classList.contains('toggled')) {
      btnCompany.classList.remove('toggled');
      dpnCompany.classList.remove('show');
    } else if (btnConnect.classList.contains('toggled')) {
      btnConnect.classList.remove('toggled');
      dpnConnect.classList.remove('show');
    }
  }
});

btnCompany.addEventListener('click', e => {
  e.stopPropagation();

  if (btnCompany.classList.contains('toggled')) {
    btnCompany.classList.remove('toggled');
    dpnCompany.classList.remove('show');
  } else {
    btnCompany.classList.add('toggled');
    dpnCompany.classList.add('show');

    if (btnProduct.classList.contains('toggled')) {
      btnProduct.classList.remove('toggled');
      dpnProduct.classList.remove('show');
    } else if (btnConnect.classList.contains('toggled')) {
      btnConnect.classList.remove('toggled');
      dpnConnect.classList.remove('show');
    }
  }
});

btnConnect.addEventListener('click', e => {
  e.stopPropagation();

  if (btnConnect.classList.contains('toggled')) {
    btnConnect.classList.remove('toggled');
    dpnConnect.classList.remove('show');
  } else {
    btnConnect.classList.add('toggled');
    dpnConnect.classList.add('show');

    if (btnProduct.classList.contains('toggled')) {
      btnProduct.classList.remove('toggled');
      dpnProduct.classList.remove('show');
    } else if (btnCompany.classList.contains('toggled')) {
      btnCompany.classList.remove('toggled');
      dpnCompany.classList.remove('show');
    }
  }
});

body.addEventListener('click', () => {
  btnProduct.classList.remove('toggled');
  dpnProduct.classList.remove('show');
  btnCompany.classList.remove('toggled');
  dpnCompany.classList.remove('show');
  btnConnect.classList.remove('toggled');
  dpnConnect.classList.remove('show');
});
