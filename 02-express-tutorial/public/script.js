'use strict';

const prodBtn = document.querySelector('.productBtn');
const dataContainer = document.querySelector('.dataContainer');

const fetchProducts = async () => {
  try {
    const response = await fetch('api/v1/products');
    const data = await response.json();
    dataContainer.innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    dataContainer.innerText = String(error);
  }
};

if (prodBtn) {
  prodBtn.addEventListener('click', (e) => {
    console.log('clicked');
    fetchProducts();
  });
} else {
  console.error('unable to locate product button');
}
