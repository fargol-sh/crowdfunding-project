let btpOverlay = document.querySelector('.btp-overlay');
let btpOverlayContent = document.querySelector('.btp-overlay__content');
let items = document.querySelectorAll('.about__item');
let btpItems = document.getElementsByClassName('btp-overlay__item');
let radioBtns = document.getElementsByClassName('btp-overlay__item--radio-input');
let itemFooter = document.getElementsByClassName('btp-overlay__item--footer');
let continueBtns = document.getElementsByClassName('btp-overlay__item--footer-button');
let inputPledge = document.querySelectorAll('.btp-overlay__item--footer-pledge');
let raisedMoney = document.querySelector('.statistics__item--raised-money');
let totalBackers = document.querySelector('.statistics__item--total-backers');
let successModal = document.querySelector('.success-modal');
let successModalContent = document.querySelector('.success-modal__content');
let successModalBtn = document.querySelector('.success-modal__btn');
let navIcon = document.querySelector('.sidebar');
let closeNavIcon = document.querySelector('.mobile-nav__icon-box');
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavContent = document.querySelector('.mobile-nav__content');
let errorMessage = document.querySelectorAll('.btp-overlay__item--error-message');
let itemNumbers = document.querySelectorAll('.item-number');
let btpItemNumbers = document.querySelectorAll('.btp-item-number');
let ctaRewards = document.querySelectorAll('.cta__reward');
let statistics = document.querySelector('.statistics');
let statisticsUserProgress = document.querySelector('.statistics__user-progress');
let ctaBookmark = document.querySelector('.features__bookmark');
let featuresBookmarkIcon = document.querySelector('.features__bookmark-icon circle');
let navItems = document.querySelectorAll('.nav-item__text');
let mobileNavItems = document.querySelectorAll('.mobile-nav__item-text');
let getStartedSection = document.querySelector('.features');
let discoverSection = document.querySelector('.statistics');
let aboutSection = document.querySelector('.about');


const userProgressHandler = function() {
  // setTimeout(() => {
  //   statisticsUserProgress.style.width = '1%';
  // }, 400);  ---> bug
  statisticsUserProgress.style.width = (parseInt(raisedMoney.innerHTML.replace(/[^0-9]/g, '')) / 100000 * 100).toString() + '%';
}

userProgressHandler();

const statisticsHandler = function() {
  setTimeout(() => {
    statistics.scrollIntoView({behavior: 'smooth'});
  }, 500);
  userProgressHandler();
}

const ctaRewardsHandler = function(j) {
  openBtpHandler();
  btpItems[j + 1].scrollIntoView({behavior: 'smooth'});
}

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
  for(let i = 0; i < radioBtns.length; i++)
  {
    if(radioBtns[i].checked) {
      itemFooter[i].style.visibility = 'visible';
      itemFooter[i].style.width = 'auto';
      itemFooter[i].style.height = 'auto';
      itemFooter[i].style.transform = 'scale(1)';
      btpItems[i].style.border = '.1px solid hsl(176, 50%, 47%)';

    } else {
      itemFooter[i].style.visibility = 'hidden';
      itemFooter[i].style.width = 0;
      itemFooter[i].style.height = 0;
      itemFooter[i].style.transform = 'scale(0)';
      btpItems[i].style.border = '.1px solid #CDCDCD';
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
  statisticsHandler();
}

const footerBtnHandler = function(k) {
  if(!inputPledge[k].value) {
    errorMessage[k].innerHTML = 'Please enter a valid number!';
    inputPledge[k].style.border = '.1px solid red';
    return;
  }
  if (k === 1) {
    if(parseInt(inputPledge[k].value) < 25) {
      errorMessage[k].innerHTML = 'Please enter a valid number!';
      inputPledge[k].style.border = '.1px solid red';
      return;
    }
  } else if (k === 2) {
    if(parseInt(inputPledge[k].value) < 75) {
      errorMessage[k].innerHTML = 'Please enter a valid number!';
      inputPledge[k].style.border = '.1px solid red';
      return;
    }
  } else if (k === 3) {
    if(parseInt(inputPledge[k].value) < 200) {
      errorMessage[k].innerHTML = 'Please enter a valid number!';
      inputPledge[k].style.border = '.1px solid red';
      return;
    }
  }
  for(let m = 0; m < errorMessage.length; m++) {
    errorMessage[m].innerHTML = '';
    inputPledge[m].style.border = '.1px solid #CDCDCD';
  }
  raisedMoney.innerHTML = '$' + (parseInt(raisedMoney.innerHTML.replace(/[^0-9]/g, '')) + parseInt(inputPledge[k].value)).toLocaleString();
  totalBackers.innerHTML = (parseInt(totalBackers.innerHTML.replace(/[^0-9]/g, '')) + 1).toLocaleString();

  if(k !== 0) {
    itemNumbers[k - 1].innerHTML = (parseInt(itemNumbers[k - 1].innerText) - 1).toString() + ' &nbsp;';
    btpItemNumbers[2 * (k - 1)].innerHTML = (parseInt(btpItemNumbers[2 * (k - 1)].innerText) - 1).toString() + ' &nbsp;';
    btpItemNumbers[2 * (k - 1) + 1].innerHTML = (parseInt(btpItemNumbers[2 * (k - 1) + 1].innerText) - 1).toString() + ' &nbsp;';
    if(parseInt(itemNumbers[k - 1].innerHTML) === 0) {
      items[k - 1].style.filter = 'opacity(50%)';
      btpItems[k].style.filter = 'opacity(50%)';
      items[k - 1].style.pointerEvents = 'none';
      btpItems[k].style.pointerEvents = 'none';
      ctaRewards[k - 1].innerHTML = 'Out of Stock';
    }
  }

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

const openNavHandler = function() {
  navIcon.style.transform = 'scale(0)';
  navIcon.style.display = 'none';
  mobileNav.style.opacity = 1;
  mobileNav.style.visibility = 'visible';
  mobileNavContent.style.opacity = 1;
  mobileNavContent.style.transform = 'scale(1)';
  setTimeout(() => {
    closeNavIcon.style.visibility = 'visible';
    closeNavIcon.style.transform = 'scale(1)';
  }, 300)
}

const closeNavHandler = function() {
  mobileNav.style.opacity = 0;
  mobileNav.style.visibility = 'hidden';
  mobileNavContent.style.opacity = 0;
  mobileNavContent.style.transform = 'scale(.95)';
  closeNavIcon.style.visibility = 'hidden';
  closeNavIcon.style.transform = 'scale(0)';
  setTimeout(() => {
    navIcon.style.display = 'block';
    navIcon.style.transform = 'scale(1)';
  }, 400);
}

const ctaBookmarkHandler = function(event) {
  if(event.target.classList.contains('cta__bookmarked')) {
    event.target.classList.toggle('cta__bookmarked');
    event.target.innerHTML = 'Bookmark';
    // ctaBookmark.classList.toggle('features__bookmarked');
    featuresBookmarkIcon.style.fill = '#2F2F2F';
  } else {
    event.target.classList.toggle('cta__bookmarked');
    event.target.innerHTML = 'Bookmarked';
    // ctaBookmark.classList.toggle('features__bookmarked');
    featuresBookmarkIcon.style.fill = 'hsl(176, 50%, 47%)';
  }
}

const navItemsHandler = function(z) {
  if(z === 0) {
    aboutSection.scrollIntoView({behavior: 'smooth'});
  } else if(z === 1) {
    discoverSection.scrollIntoView({behavior: 'smooth'});
  } else {
    getStartedSection.scrollIntoView({behavior: 'smooth'});
  }
}

const mobileNavItemsHandler = function(z) {
  closeNavHandler();
  setTimeout(() => {
    if(z === 0) {
      aboutSection.scrollIntoView({behavior: 'smooth'});
    } else if(z === 1) {
      discoverSection.scrollIntoView({behavior: 'smooth'});
    } else {
      getStartedSection.scrollIntoView({behavior: 'smooth'});
    }
  }, 600);
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

navIcon.addEventListener('click', openNavHandler);
closeNavIcon.addEventListener('click', closeNavHandler);

for(let j = 0;j < ctaRewards.length; j++) {
  ctaRewards[j].addEventListener('click', ctaRewardsHandler.bind(this, j));
}

ctaBookmark.addEventListener('click', ctaBookmarkHandler);

for(let z = 0; z < navItems.length; z++) {
  navItems[z].addEventListener('click', navItemsHandler.bind(this, z));
  mobileNavItems[z].addEventListener('click', mobileNavItemsHandler.bind(this, z));
}












////
