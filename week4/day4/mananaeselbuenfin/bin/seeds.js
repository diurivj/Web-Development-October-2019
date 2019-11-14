require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("../models/Product");

const mockProducts = [
  {
    name: "Bola de boliche",
    categories: ["Deportes", "Ocio"],
    description: "Huele bien",
    photoURL:
      "https://m.media-amazon.com/images/I/41qVsj7-nJL._AC_UL320_ML3_.jpg",
    price: 3121
  },
  {
    name: 'MacBook Pro 16" 2019',
    categories: ["Electronica", "Geek", "Friki", "Ocio"],
    description: "🍎 te va a hacer feliz",
    photoURL:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1572825197207",
    price: 70000
  },
  {
    name: "Nintendo Switch",
    categories: ["Geek", "Friki", "Ocio"],
    description: "No tan feliz",
    price: 5000
  },
  {
    price: 20,
    name: "Taquuitos de tripa",
    description: "hmmmmm, sin lavar",
    photoURL:
      "https://gentenayarit.com/wp-content/uploads/2019/04/tacos-tripa.jpg"
  }
];

mongoose
  .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(async () => {
    const products = await Product.create(mockProducts);
    console.log(`${products.length} created successfully`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
