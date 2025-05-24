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
      "/Assets/SmartWatch.jpeg",
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
// Get the div element with id 'heroSection' where products will be displayed
let heroSection = document.getElementById("heroSection");

// Use the map method to iterate over each product in the productData array
productData.map((product) => {
  // Create a new div to act as a container for each product
  let container = document.createElement("div");
  // Assign the class 'container' for styling purposes
  container.className = "container";

  // Create an img element for the product image
  let productImage = document.createElement("img");
  // Set the image source attribute to the product's image URL
  productImage.setAttribute("src", product.image);

  // Create an h1 element to display the product's name
  let productName = document.createElement("h1");
  // Set the text content to the product's name
  productName.innerText = product.name;
  
  // Create a paragraph element to show the product description/details
  let productDetails = document.createElement("p");
  // Set the paragraph text to the product description
  productDetails.innerText = product.description;
  
  // Create an h3 element to show the product price
  let productPriceUSD = document.createElement("h3");
  /* 
    Set the price text to display price in USD, 
    followed by equivalent price in Indian Rupees (approximate conversion by multiplying by 85)
  */
  productPriceUSD.innerText = product.priceInUSD + " USD" + " || " + Math.floor(product.priceInUSD * 85) + " RS";

  // Append all created elements into the container div in the desired order
  container.appendChild(productImage);
  container.appendChild(productName);
  container.appendChild(productDetails);
  container.appendChild(productPriceUSD);

  // Append the container div into the main heroSection element to display on the webpage
  heroSection.appendChild(container);
});

