'use strict';

const prodBtn = document.querySelector('.productBtn');
const dataContainer = document.querySelector('.dataContainer');

const fetchProducts = async () => {
  try {
    const response = await fetch('api/v1/products');
    const data = await response.json();
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.log(error);
  }
};

prodBtn.addEventListener('click', (e) => {
  console.log('clicked');
  fetchProducts().then((result) => {
    console.log(result);
    dataContainer.innerText = result;
  });
});
