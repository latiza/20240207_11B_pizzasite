const products = [
    {
      name: "Margaritha",
      img: "img/001.jpg",
      sizes: ["Nagy", "Közepes", "Kicsi"],
      prices: [300, 300 * 3/4, 300 / 2],
      ingredients: ["fokhagyma", "paradicsom", "sajt", "élesztő"]
    },
    {
      name: "Vegán",
      img: "img/002.jpg",
      sizes: ["Nagy", "Közepes", "Kicsi"],
      prices: [200, 200 * 3/4, 200 / 2],
      ingredients: ["zöldségek", "tofu"]
    },
    {
      name: "Sajtos",
      img: "img/003.jpg",
      sizes: ["Nagy", "Közepes", "Kicsi"],
      prices: [500, 500 * 3/4, 500 / 2],
      ingredients: ["tej", "sajtkultúra", "só"]
    },
    {
      name:"Szalámis",
      img: "img/004.jpg",
      sizes: ["Nagy", "Közepes", "Kicsi"],
      prices: [500, 500 * 3/4, 500 / 2],
      ingredients: ["szalámi", "sajtkultúra", "só"]
    }
  ];
  
  const orders = [];
  
  const productsContainer = document.getElementById('products-container');
  
  products.forEach((product, index) => {
    const cardHTML = `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}">
        <div>${product.name}</div>
        <div>
          ${product.sizes.map((size, sizeIndex) => `
            <input type="radio" name="${product.name}-size" value="${sizeIndex}" ${sizeIndex === 0 ? 'checked' : ''}>
            <label>${size}</label>
          `).join('')}
        </div>
        <div class="price">${product.prices[0]} Ft</div>
        <button class="order-button">Megrendelés</button>
      </div>
    `;
    //productsContainer.insertAdjacentHTML('beforeend', cardHTML);
    productsContainer.innerHTML += cardHTML;
  });

  
  productsContainer.addEventListener('change', event => {
    const target = event.target;
    if (target.type === 'radio') {
      const productName = target.name.replace('-size', '');
      const productIndex = products.findIndex(product => product.name === productName);
      const sizeIndex = parseInt(target.value);
      const price = products[productIndex].prices[sizeIndex];
      target.closest('.product-card').querySelector('.price').textContent = `${price} Ft`;
    }
  });
  
  productsContainer.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('order-button')) {
      const productName = target.closest('.product-card').querySelector('div:nth-child(2)').textContent;
      const sizeIndex = parseInt(target.closest('.product-card').querySelector('input[type="radio"]:checked').value);
      const size = products.find(product => product.name === productName).sizes[sizeIndex];
      const price = products.find(product => product.name === productName).prices[sizeIndex];
      orders.push({ name: productName, size: size, price: price });
      alert(`Megrendelve: ${productName} (${size}), Ár: ${price} Ft`);
      console.log("Megrendelések:", orders);
    }
  });
  