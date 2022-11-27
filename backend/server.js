const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const imageRouter = require("./routes/imageRoute");
const cartRouter = require("./routes/CartRoutes");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/image", imageRouter);
app.use("/cart", cartRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});