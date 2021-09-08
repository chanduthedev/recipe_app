// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  ingradients: { type: array, default: [], required: true },
  instructions: { type: array, default: [], required: true },
  created_timestamp: { type: Date },
  updated_timestamp: { type: Date },
});

module.exports = mongoose.model("Recipes", recipeSchema);
