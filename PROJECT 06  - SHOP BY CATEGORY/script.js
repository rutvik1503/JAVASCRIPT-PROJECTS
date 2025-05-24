const products = [
  {
    name: "Nike Air Max 270",
    price: 12999,
    description:
      "Comfortable and stylish running shoes with Max Air cushioning.",
    category: "shoes",
    image: "Assets/01.jpg",
  },
  {
    name: "Levi's Slim Fit Jeans",
    price: 2999,
    description: "Dark wash slim fit jeans for casual wear.",
    category: "men clothes",
    image: "Assets/02.jpg",
  },
  {
    name: "Adidas Sports T-shirt",
    price: 1499,
    description: "Breathable polyester T-shirt for workouts and sports.",
    category: "sport",
    image: "Assets/03.jpg",
  },
  {
    name: "Zara Floral Dress",
    price: 2499,
    description: "Elegant floral print summer dress for women.",
    category: "women clothes",
    image: "Assets/04.jpg",
  },
  {
    name: "Tommy Hilfiger Cap",
    price: 999,
    description: "Stylish and comfortable cotton cap.",
    category: "accessories",
    image: "Assets/05.jpg",
  },
  {
    name: "H&M Boys T-shirt Pack",
    price: 1299,
    description: "Pack of 3 colorful cotton T-shirts for boys.",
    category: "kids clothes",
    image: "Assets/06.jpg",
  },
  {
    name: "Puma Running Shoes",
    price: 4599,
    description: "Durable and cushioned running shoes with mesh upper.",
    category: "shoes",
    image: "Assets/07.jpg",
  },
  {
    name: "Ray-Ban Aviator Sunglasses",
    price: 7499,
    description: "Classic aviator sunglasses with UV protection.",
    category: "accessories",
    image: "Assets/08.jpg",
  },
  {
    name: "Reebok Training Shorts",
    price: 1799,
    description: "Moisture-wicking shorts for active sports and gym.",
    category: "sport",
    image: "Assets/09.jpg",
  },
  {
    name: "Uniqlo Men’s Cotton Shirt",
    price: 1899,
    description: "Regular fit, breathable cotton shirt for daily wear.",
    category: "men clothes",
    image: "Assets/10.jpg",
  },
  {
    name: "FabIndia Women Kurti",
    price: 2199,
    description: "Handcrafted cotton kurti with traditional prints.",
    category: "women clothes",
    image: "Assets/11.jpg",
  },
  {
    name: "Woodland Leather Belt",
    price: 1299,
    description: "Genuine leather belt with rugged buckle.",
    category: "accessories",
    image: "Assets/12.jpg",
  },
  {
    name: "US Polo Kids Denim Shorts",
    price: 999,
    description: "Denim shorts for boys with elastic waistband.",
    category: "kids clothes",
    image: "Assets/13.jpg",
  },
  {
    name: "Adidas Predator Football Shoes",
    price: 6999,
    description: "High-performance football boots with enhanced grip.",
    category: "sport",
    image: "Assets/14.jpg",
  },
  {
    name: "Nike Sports Watch",
    price: 5599,
    description: "Digital sports watch with water resistance and stopwatch.",
    category: "accessories",
    image: "Assets/15.jpg",
  },
  {
    name: "Levi’s Women Skinny Jeans",
    price: 3299,
    description: "Stretchy and slim-fit jeans for everyday fashion.",
    category: "women clothes",
    image: "Assets/16.jpg",
  },
  {
    name: "Arrow Formal Shirt",
    price: 2399,
    description: "Classic fit formal shirt perfect for office wear.",
    category: "men clothes",
    image: "Assets/17.jpg",
  },
  {
    name: "Crocs Kids Clogs",
    price: 1999,
    description: "Soft and durable clogs with ventilation for kids.",
    category: "kids clothes",
    image: "Assets/18.jpg",
  },
  {
    name: "HRX Training Tank Top",
    price: 999,
    description: "Sleeveless tank top designed for high-performance workouts.",
    category: "sport",
    image: "Assets/19.jpg",
  },
  {
    name: "H&M Women Cotton Top",
    price: 1199,
    description: "Lightweight cotton top for casual occasions.",
    category: "women clothes",
    image: "Assets/20.jpg",
  },
  {
    name: "Fossil Leather Wallet",
    price: 2499,
    description: "Premium leather wallet with multiple compartments.",
    category: "accessories",
    image: "Assets/21.jpg",
  },
  {
    name: "Reebok Men Joggers",
    price: 2099,
    description: "Comfortable and flexible joggers for running and casual use.",
    category: "men clothes",
    image: "Assets/22.jpg",
  },
  {
    name: "Bata Formal Shoes",
    price: 2899,
    description: "Leather formal shoes for office and events.",
    category: "shoes",
    image: "Assets/23.jpg",
  },
  {
    name: "Luvlap Baby Onesies",
    price: 899,
    description: "Pack of 2 soft cotton onesies for infants.",
    category: "kids clothes",
    image: "Assets/24.jpg",
  },
  {
    name: "Nike Air Zoom Pegasus",
    price: 7999,
    description: "Premium running shoes with advanced Zoom Air technology.",
    category: "shoes",
    image: "Assets/25.jpg",
  },
];

const container = document.getElementById("container");
const options = document.getElementById("options");

function displayProducts(productList) {
  container.innerHTML = "";
  productList.forEach((product) => {
    let box = document.createElement("div");
    box.className = "box";

    let productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    box.appendChild(productImage);

    let productName = document.createElement("h1");
    productName.innerText = product.name;
    box.appendChild(productName);

    let productDetail = document.createElement("p");
    productDetail.innerText = product.description;
    box.appendChild(productDetail);

    let productPrice = document.createElement("h3");
    productPrice.innerText = product.price + "/-";
    box.appendChild(productPrice);

    container.appendChild(box);
  });
}

displayProducts(products);
  
options.addEventListener("change", function () {
  if (options.value === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(
      (product) => product.category === options.value
    );
    displayProducts(filtered);
  }
});
