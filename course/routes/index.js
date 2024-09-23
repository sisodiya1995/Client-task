var express = require("express");
var router = express.Router();

const SubCategory = require("../models/SubCategory");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const subCategories = await SubCategory.find().populate("category");

    const result = subCategories.reduce((acc, item) => {
      const categoryName = item.category.name;
      const category = acc.find((c) => c.name === categoryName);

      if (category) {
        category.subCategory += 1;
      } else {
        acc.push({ name: categoryName, subCategory: 1 });
      }

      return acc;
    }, []);

    // Render the EJS view and pass 'result' data to it
    res.render("index", { title: "Express", data: result });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

module.exports = router;
