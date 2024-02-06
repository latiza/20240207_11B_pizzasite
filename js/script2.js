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
  
  for (const product of products) {
    const cardHTML = `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}">
        <div>${product.name}</div>
        <div>${product.prices} Ft</div>
        <div>Összetevők: ${product.ingredients.join(", ")}</div>
        <button class="order-button">Megrendelés</button>
      </div>
    `;
    productsContainer.innerHTML += cardHTML;
  }
  
  const orderButtons = document.querySelectorAll('.order-button');
  
  for (const [index, button] of orderButtons.entries()) {
    button.addEventListener('click', () => {
      const productName = products[index].name;
      const price = products[index].prices[0];
      alert(`Megrendelve: ${productName}, Ár: ${price} Ft`);
    });
  }
  /**his JavaScript code performs the following tasks:

Retrieves the container element (productsContainer) where product cards will be appended.
Iterates through each product in the products array and constructs HTML markup for a product card using template literals.
Appends the product card HTML to the productsContainer.
Selects all order buttons after they have been added to the DOM.
Iterates over the order buttons using entries() method to track their index.
Attaches a click event listener to each order button, which retrieves product details based on the button's index from the products array and displays an alert with the ordered product's name and price. */
  