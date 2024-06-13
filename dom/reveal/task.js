const reveals = document.querySelectorAll('.reveal');



let isVisible = function (element) {
  let elementPosition = {
    top: window.pageYOffset + element.getBoundingClientRect().top,
    left: window.pageXOffset + element.getBoundingClientRect().left,
    right: window.pageXOffset + element.getBoundingClientRect().right,
    bottom: window.pageYOffset + element.getBoundingClientRect().bottom
  },

    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (elementPosition.bottom > windowPosition.top &&
    elementPosition.top < windowPosition.bottom &&
    elementPosition.right > windowPosition.left &&
    elementPosition.left < windowPosition.right) {


    element.classList.add('reveal_active')
  }
};

reveals.forEach(reveal => {
  window.addEventListener('scroll', function () {
    isVisible(reveal);
  });
})
