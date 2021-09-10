let btpOverlay = document.querySelector('.btp-overlay');
let btpOverlayContent = document.querySelector('.btp-overlay__content');
//const homepageAddress = document.getElementById('btp-overlay'); // change the url address later
let items = document.getElementsByClassName('btp-overlay__item');
let radioBtns = document.getElementsByClassName('btp-overlay__item--radio-input');
let itemFooter = document.getElementsByClassName('btp-overlay__item--footer');

const closeBtpHandler = function() {
  btpOverlay.style.visibility = 'hidden';
  btpOverlayContent.style.opacity = 0;
}

const openBtpHandler = function() {
  btpOverlay.style.visibility = 'visible';
  btpOverlayContent.style.opacity = 1;
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

document.querySelector('.cta__back-this-project').addEventListener('click', openBtpHandler);

document.querySelector('.btp-overlay__icon').addEventListener('click', closeBtpHandler);

for(let i = 0; i < radioBtns.length; i++)
{
  radioBtns[i].addEventListener('click', footerHandler);
}
