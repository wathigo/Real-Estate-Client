/* eslint-disable */
const animate = (elem, style, unit, from, to, time, prop) => {
  if (!elem) {
    return;
  }
  const start = new Date().getTime();
  const timer = setInterval(() => {
    const step = Math.min(1, (new Date().getTime() - start) / time);
    if (prop) {
      elem[style] = (from + step * (to - from)) + unit;
    } else {
      elem.style[style] = (from + step * (to - from)) + unit;
    }
    if (step === 1) {
      clearInterval(timer);
    }
  }, 25);
  if (prop) {
    elem[style] = from + unit;
  } else {
    elem.style[style] = from + unit;
  }
};

const animateScroll = id => {
  const target = document.querySelector(`#${id}`);
  animate(document.scrollingElement || document.documentElement, 'scrollTop', '', 0, target.offsetTop, 1000, true);
};

export default animateScroll;
