let btpOverlay = document.querySelector('.btp-overlay');
let btpOverlayContent = document.querySelector('.btp-overlay__content');
//const homepageAddress = document.getElementById('btp-overlay'); // change the url address later
let radioBtns = document.getElementsByClassName('btp-overlay__item--radio-button');


const closeBtpHandler = function() {
  btpOverlay.style.visibility = 'hidden';
  btpOverlayContent.style.opacity = 0;
}

const openBtpHandler = function() {
  btpOverlay.style.visibility = 'visible';
  btpOverlayContent.style.opacity = 1;
}

// const radioBtnHandler = function(i) {
//   for(let j = 0; j < radioBtns.length; j++) {
//     if(j != i) {
//       radioBtns[j].style.opacity = 0;
//     } else {
//       radioBtns[j].style.opacity = 1;
//     }
//   }
// }

document.querySelector('.cta__back-this-project').addEventListener('click', openBtpHandler);

document.querySelector('.btp-overlay__icon').addEventListener('click', closeBtpHandler);

// for(let i = 0; i < radioBtns.length; i++)
// {
//    document.getElementsByClassName(
//      'btp-overlay__item--radio-label'
//    )[i].addEventListener('click', radioBtnHandler.bind(this, i));
// }







/////
