const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce(() => {
  incrementCount(debounceText)
})
const updateThrottleText = throttle(() => {
  incrementCount(throttleText)
}, 1000)

function debounce(cb, delay = 1000) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

function throttle(cb, delay = 1000) {
  let last = 0;

  return (...args) => {
    const now = Date.now();
    if (now - last < delay) return;
    cb(...args);
    last = now;
  }
}

document.addEventListener("mousemove", e => {
  incrementCount(defaultText)
  updateDebounceText()
  updateThrottleText()
})

function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1
}