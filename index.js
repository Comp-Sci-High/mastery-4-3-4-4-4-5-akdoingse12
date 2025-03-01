const express = require("express");
const app = express();

// Task 1: Create your views folder and add the correct files to it. 

// Task 2: Set the view engine to ejs.

app.get("/", (req, res) => {
  // Task 3: Create a data object with the following 3 keys:
  // "title" key with the a string as a value (Pick Your Store's title)
  // "itemsOnSale" key with a boolean indicating whether you have items on sale.
  // "products" key with an array of at least 3 objects
  // Each Object in "products" should have 2 keys
  // "name" key with a string as a value (Name the item your selling)
  // "sale" key with a string as a value (Give it a sale, like 5% off. If there is no sale leave an empty string)

const storeData = {
  title: "Ak's soccer store",
  itemsOnSale: true,
  products: [
    {
      name:'ball',
      sale: '12% off'
    },
    {
      name: 'cleats',
      sale: '30% off'
    },
    {
      name: 'shirtnshorts',
      sale: '20% off'
    }
  ]

}

  // Task 4: Render the ejs file "store.ejs" with your data object.
app.get('/', (req,res) => {
  res.render('store', storeData);
});

// Task 5: [CONTINUE TASKS IN store.ejs]

app.listen(3000, () => {
  console.log(`Server is running.`);
});
