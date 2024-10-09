const Medusa = require("@medusajs/medusa-js").default; // Use .default to import correctly

// Initialize Medusa client
const medusa = new Medusa({ baseUrl: "http://localhost:9000", maxRetries: 3 });

// Define your sales channel IDs (array of sales channel IDs)
const salesChannelIds = [
  "sc_01J9QD9A88R82NJYHDSFYF95PS",
  "sc_01J9QK750MJKSRVP2WK15FSM8P",
  "sc_01J9QK6SW4B8PZC12HE63QPYSP",
  "sc_01J9QK6Z29V7XAHQ1QEYKT7ZKG",
  // Add more sales channel IDs as needed
];

// Fetch products for the specified sales channels
medusa.products.list({
  sales_channel_id: salesChannelIds, // Pass the array of sales channel IDs
})
.then(({ products, limit, offset, count }) => {
  console.log(`Number of products returned: ${products.length}`);
  console.log(`Limit: ${limit}, Offset: ${offset}, Total products: ${count}`);
  
  // Optionally, you can log products or handle them further
  products.forEach(product => {
    console.log(`Product ID: ${product.id}, Product Title: ${product.title}`);
  });
})
.catch((error) => {
  console.error("Error fetching products:", error);
});
