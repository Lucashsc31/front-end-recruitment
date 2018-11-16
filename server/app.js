const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5200;

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "data", "products.json"));
});

app.listen(port, () => {
  console.log(`API is listening on port: ${port}.`);
});