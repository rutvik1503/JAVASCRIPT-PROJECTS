const productData = [
  {
    image:
      "/PROJECT 01 - ARRAY METHODS/MAP( )/Assets/Headphones.jpeg",
    name: "Wireless Headphones",
    description:
      "Bluetooth over-ear headphones with noise cancellation and 20h battery life.",
    priceInUSD: 79.99,
  },
  {
    image:
      "/PROJECT 01 - ARRAY METHODS/MAP( )/Assets/SmartWatch.jpeg",
    name: "Smartwatch Pro",
    description: "Track your fitness, heart rate, and notifications on the go.",
    priceInUSD: 149.99,
  },
  {
    image:
      "/PROJECT 01 - ARRAY METHODS/MAP( )/Assets/EspressoMachine.jpeg",
    name: "Espresso Machine",
    description: "Make café-quality espresso at home with ease.",
    priceInUSD: 119.0,
  },
  {
    image:
      "/PROJECT 01 - ARRAY METHODS/MAP( )/Assets/DeskLamp.jpeg",
    name: "LED Desk Lamp",
    description:
      "Adjustable brightness and color temperature for optimal lighting.",
    priceInUSD: 29.95,
  },
  {
    image:
      "/PROJECT 01 - ARRAY METHODS/MAP( )/Assets/TravellingBag.jpeg",
    name: "Travel Backpack",
    description:
      "Water-resistant backpack with multiple compartments and USB port.",
    priceInUSD: 45.5,
  },
  {
    image:
      "/PROJECT 01 - ARRAY METHODS/MAP( )/Assets/RGBMouse.jpeg",
    name: "RGB Gaming Mouse",
    description: "High precision with customizable DPI and lighting.",
    priceInUSD: 39.99,
  },
];

let heroSection = document.getElementById("heroSection");

productData.map((product) => {
  let container = document.createElement("div");
  container.className = "container";

  let productImage = document.createElement("img");
  productImage.setAttribute("src", product.image);

  let productName = document.createElement("h1");
  productName.innerText = product.name;
  
  let productDetails = document.createElement("p");
  productDetails.innerText = product.description;
  
  let productPriceUSD = document.createElement("h3");
  productPriceUSD.innerText = product.priceInUSD + " USD" + " || " + Math.floor(product.priceInUSD*85) + " RS";

  container.appendChild(productImage)
  container.appendChild(productName)
  container.appendChild(productDetails)
  container.appendChild(productPriceUSD)

  heroSection.appendChild(container);
});
