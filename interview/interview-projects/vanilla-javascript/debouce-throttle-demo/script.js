window.onload = () => {
  console.log("App Started");
};

document.addEventListener(
  "click",
  //   debounce(() => {
  //     console.log("You Clicked Me");
  //   }, 2000)
  throttle(() => {
    console.log("You Clicked Me");
  }, 2000)
);

function debounce(fn, delay) {
  let timeout = null;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(fn, delay);
  };
}

function throttle(fn, delay) {
  let waiting = false;
  return (...args) => {
    const waiting = new Date().getTime();
    if (now - last < delay) {
      return;
    }

    last = now;
    fn(...args);
  };
}
