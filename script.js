// Sample products — add your own products here
const products = [
  {
    name: "Sky blue kalamkari silk saree",
    price: "₹1699",
    image: "https://i.postimg.cc/FHg8y44Q/1.png"
  },
  {
    name: "Black 3D printed silk saree",
    price: "₹16599",
    image: "https://i.postimg.cc/25RMvSJG/8.png"
  },
  {
    name: "Orange Semi paithani silk saree",
    price: "₹1,699",
    image: "https://i.postimg.cc/V69fRW9v/Untitled-design.png",
  }, 
   
  {
    name: "Voilet kalamkari silk saree",
    price: "₹1,699",
    image: "https://i.postimg.cc/QNQQxxks/3.png"
  },
  {
    name: "Yellow kalamkari silk saree",
    price: "₹1,699",
    image: "https://i.postimg.cc/nLn8gLkz/4.png"
  },
  {
    name: " Light black red kalamkari silk saree",
    price: "₹1,699",
    image: "https://i.postimg.cc/kM2xKvmJ/5.png"
  },
  {
    name: "Black kalamkari silk saree",
    price: "₹1,699",
    image: "https://i.postimg.cc/rwZV1xcT/6.png"
  },
  {
    name: "Designer kalamkari silk saree",
    price: "₹1,699",
    image: "https://i.postimg.cc/j2M9p6Md/7.png"
  },
  {
    name: " Silk saree",
    price: "₹799",
    image: "https://i.postimg.cc/Z5Qjm6cn/Untitled-design-4.png"
  },
  {
    name: " Silk saree's (4 colours)",
    price: "₹3000",
    image: "https://i.postimg.cc/pTfBK4t5/Untitled-design-3.png"
  },
];



const cottons = [
  {
    name: "Meena Cotton saree (Blue)",
    price: "₹850",
    image: "https://i.postimg.cc/13KBgLsg/Untitled-design-1.png"
  },
  {
    name: "Meena cotton saree",
    price: "₹850",
    image: "https://i.postimg.cc/KYHnBbVY/Untitled-design-2.png"
  },


  ];


const cart = [];

function addToCart(name, price) {
  const numericPrice = parseInt(price.replace("₹", "").replace(",", ""));
  cart.push({ name, price: numericPrice });
  alert(`${name} added to cart`);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    cartItems.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
    total += item.price;
  });

  cartTotal.innerText = `Total: ₹${total}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const message = cart.map(item => `${item.name} - ₹${item.price}`).join('\n');
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const fullMessage = `Hello, I would like to order:\n\n${message}\n\nTotal: ₹${total}`;
  const whatsappNumber = "916281013399"; // Replace with your number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

  window.open(whatsappURL, "_blank");

  cart.length = 0;
  updateCartDisplay();
}

// Renders products with "Add to Cart" buttons
function renderProducts(list, containerId, cardClass) {
  const grid = document.getElementById(containerId);
  list.forEach(product => {
    const priceValue = product.price.replace("₹", "").replace(",", "");
    const card = document.createElement("div");
    card.className = cardClass;
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products, "productGrid", "product-card");
  renderProducts(cottons, "cottonsGrid", "cottons-card");
});
// Sidebar toggle logic
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products, "productGrid", "product-card");
  renderProducts(cottons, "cottonsGrid", "cottons-card");

  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebar = document.getElementById("sidebar");

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
});
