//Know more: https://docs.google.com/document/d/11QDHBxd3uZvTJLkw8WW-lQrDS4RQnVcaI5ihFycrfCU/edit?usp=sharing

const limit = 10;
let page = 0;
let totalItems = null;

window.onload = (event) => {
  fetchProducts(0)
};

window.addEventListener('scroll', debounce(scrollHandler));

function fetchProducts(skip) {
  if (totalItems && totalItems === skip) {
    return;
  }

  fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
    .then((res) => res.json())
    .then(({products, total}) => {
      if (!totalItems) {
        totalItems = total;
      }

      const productList = document.getElementById('products');
      products.forEach(product => {
        const ele = document.createElement('li');
        ele.classList.add('product');
        ele.innerHTML = JSON.stringify(product, null, 2);
        productList.appendChild(ele);
      })
    });
}

function debounce(fn, delay) {
  let timeout = null;
  return (...args) => {
    if(timeout) {
      clearTimeout(timeout);
    }

    setTimeout(() => {
      fn.call(this, ...args);
    }, delay)
  }
}

function scrollHandler() {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    page++;
    const skip = page * limit;

    if (skip <= totalItems) {
      fetchProducts(skip);
    }
  }
}

