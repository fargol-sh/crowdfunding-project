let btpOverlay = document.querySelector('.btp-overlay');
let btpOverlayContent = document.querySelector('.btp-overlay__content');
//const homepageAddress = document.getElementById('btp-overlay'); // change the url address later
let items = document.getElementsByClassName('btp-overlay__item');
let radioBtns = document.getElementsByClassName('btp-overlay__item--radio-input');
let itemFooter = document.getElementsByClassName('btp-overlay__item--footer');
let continueBtns = document.getElementsByClassName('btp-overlay__item--footer-button');
let inputPledge = document.querySelectorAll('.btp-overlay__item--footer-pledge');
let raisedMoney = document.querySelector('.statistics__item--raised-money');
let totalBackers = document.querySelector('.statistics__item--total-backers');
let successModal = document.querySelector('.success-modal');
let successModalContent = document.querySelector('.success-modal__content');
let successModalBtn = document.querySelector('.success-modal__btn');



const closeBtpHandler = function() {
  btpOverlay.style.opacity = 0;
  btpOverlay.style.visibility = 'hidden';
  btpOverlayContent.style.opacity = 0;
  btpOverlayContent.style.transform = 'translate(47%, 10%) scale(.95)';
}

const openBtpHandler = function() {
  btpOverlay.style.opacity = 1;
  btpOverlay.style.visibility = 'visible';
  btpOverlayContent.style.opacity = 1;
  btpOverlayContent.style.transform = 'translate(47%, 10%) scale(1)';
}

const footerHandler = function() {
  for(let i = 1; i < radioBtns.length; i++)
  {
    if(radioBtns[0].checked) {
      items[0].style.border = '.1px solid hsl(176, 50%, 47%)';
    } else {
      items[0].style.border = '.1px solid #CDCDCD';
    }
    if(radioBtns[i].checked) {
      itemFooter[i - 1].style.visibility = 'visible';
      itemFooter[i - 1].style.width = 'auto';
      itemFooter[i - 1].style.height = 'auto';
      itemFooter[i - 1].style.transform = 'scale(1)';
      items[i].style.border = '.1px solid hsl(176, 50%, 47%)';

    } else {
      itemFooter[i - 1].style.visibility = 'hidden';
      itemFooter[i - 1].style.width = 0;
      itemFooter[i - 1].style.height = 0;
      itemFooter[i - 1].style.transform = 'scale(0)';
      items[i].style.border = '.1px solid #CDCDCD';
    }
  }
}

const openSuccessModalHandler = function() {
  successModal.style.visibility = 'visible';
  successModalContent.style.opacity = 1;
  successModalContent.style.transform = 'translate(-50%, -50%) scale(1)';
}

const closeSuccessModalHandler = function() {
  successModal.style.visibility = 'hidden';
  successModalContent.style.opacity = 0;
  successModalContent.style.transform = 'translate(-50%, -50%) scale(0)';
}

const footerBtnHandler = function(k) {
  raisedMoney.innerHTML = '$' + (parseInt(raisedMoney.innerHTML.replace(/[^0-9]/g, '')) + parseInt(inputPledge[k].value)).toString();
  totalBackers.innerHTML = (parseInt(totalBackers.innerHTML.replace(/[^0-9]/g, '')) + 1).toString();
  closeBtpHandler();
  setTimeout(() => {
    for(let n = 0; n < inputPledge.length; n++) {
      inputPledge[n].value = '';
    }
    for(let j = 0; j < radioBtns.length; j++) {
      radioBtns[j].checked = false;
    }
    footerHandler();
    openSuccessModalHandler();
  } , 500);
}

document.querySelector('.cta__back-this-project').addEventListener('click', openBtpHandler);

document.querySelector('.btp-overlay__icon').addEventListener('click', closeBtpHandler);

for(let i = 0; i < radioBtns.length; i++)
{
  radioBtns[i].addEventListener('click', footerHandler);
}

for(let k = 0; k < continueBtns.length; k++) {
  continueBtns[k].addEventListener('click', footerBtnHandler.bind(this, k));
}

successModalBtn.addEventListener('click', closeSuccessModalHandler);






////
