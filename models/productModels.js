const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
