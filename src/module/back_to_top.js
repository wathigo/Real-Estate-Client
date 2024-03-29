/* eslint-disable */
const scrollUp = (() => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const element = document.getElementById('back2Top');
    if(element) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (element.style.display === 'none') {
          element.style.display = 'block';
          increase(element);
        }
      } else if (element) {
        element.style.display = 'none';
        decrease(element);
      }
    }
  }
});

const decrease = element => {
  let opacity = 1;
  function decrease() {
    opacity -= 0.05;
    if (opacity <= 0) {
      // complete
      element.style.opacity = 0;
      return true;
    }
    element.style.opacity = opacity;
    requestAnimationFrame(decrease);
  }
  decrease();
};

const increase = element => {
  let opacity = 0;
  function decrease() {
    opacity += 0.05;
    if (opacity <= 0) {
      // complete
      element.style.opacity = 0;
      return true;
    }
    element.style.opacity = opacity;
    requestAnimationFrame(decrease);
  }
  decrease();
};

export default scrollUp;
