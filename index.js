//const btp = document.querySelector('cta__back-this-project');
const btpHandler = function() {
  const btpOverlay = document.querySelector('.btp-overlay');
  btpOverlay.style.visibility = 'visible';
  const btpOverlayContent = document.querySelector('.btp-overlay__content');
  btpOverlayContent.style.opacity = 1;
}

document.querySelector('.cta__back-this-project').addEventListener('click', btpHandler);
