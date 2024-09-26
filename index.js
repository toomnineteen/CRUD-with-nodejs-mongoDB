const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const ProductModels = require("./models/productModels");

const app = express();
app.use(cors());

//====================== GET SINGLE POST
// GET : api/product/:id
app.get("/api/product/:id", async (req, res) => {
  try {
    const productID = req.params.id

    console.log("ID : ",productID)

    const getOneProduct = await ProductModels.findById(productID)
    res.send(getOneProduct)
    console.log("getOneProduct : ",getOneProduct)

  } catch (error) {
    console.log(error);
  }
});

app.get("/api/product", async (req, res) => {
  try {

    const producted = await ProductModels.find({});
    res.send(producted);
    console.log("product :", producted);

  } catch (error) {
    console.log(error);
  }
});

app.post("/api/product", async (req, res) => {
  try {

    const data = req.body;
    const product = await ProductModels(data).save();
    res.send(product);

  } catch (error) {
    console.log(error);
  }
});

app.put("/api/product/:id", async (req, res) => {
  try {

    const id = req.params.id;
    const newData = req.body;

    const updated = await ProductModels.findByIdAndUpdate(
      { _id: id },
      newData,
      { new: true }
    );
    res.send(updated);

    console.log("id :", id);
    console.log("id :", updated);

  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/product/:id", async (req, res) => {
  try {

    const id = req.params.id
    const removed = await ProductModels.findByIdAndDelete({_id:id})
    res.send(removed)
    
  } catch (error) {
    console.log(error);
  }
});

connectDB();
app.listen(5000, () => {
  console.log("Server is running on port 50000");
});
