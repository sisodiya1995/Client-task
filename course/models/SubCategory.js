const mongoose = require("mongoose");
// const { Schema } = mongoose;
var Schema = mongoose.Schema;
const subCategorySchema = new Schema({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
