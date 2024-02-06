const products = [
    {
      name: "Margaritha",
      img: "img/001.jpg",
      prices: [3300],
      ingredients: ["fokhagyma", "paradicsom", "sajt", "élesztő"]
    },
    {
      name: "Vegán",
      img: "img/002.jpg",
      prices: [2200],
      ingredients: ["zöldségek", "tofu"]
    },
    {
      name: "Sajtos",
      img: "img/003.jpg",
      prices: [3500],
      ingredients: ["tej", "sajtkultúra", "só"]
    },
    {
      name:"Szalámis",
      img: "img/004.jpg",
      prices: [3800],
      ingredients: ["szalámi", "sajtkultúra", "só"]
    }
  ];
  
  const productsContainer = document.getElementById('products-container');
  
  products.forEach(product => {
    const cardHTML = `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}">
        <div>${product.name}</div>
        <div>${product.prices[0]} Ft</div>
        <div>Összetevők: ${product.ingredients.join(", ")}</div>
        <button class="order-button">Megrendelés</button>
      </div>
    `;
    productsContainer.innerHTML += cardHTML;
  });
  
  const orderButtons = document.querySelectorAll('.order-button');
  
  orderButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const productName = products[index].name;
      const price = products[index].prices[0];
      alert(`Megrendelve: ${productName}, Ár: ${price} Ft`);
    });
  });
  