const mongoose = require("mongoose");
// const { Schema } = mongoose;
var Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  subCategories: [{ type: Schema.Types.ObjectId, ref: "SubCategory" }],
});

module.exports = mongoose.model("Course", courseSchema);
