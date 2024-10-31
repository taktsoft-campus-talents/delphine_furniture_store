import cors from "cors";
import express, { json } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import { config } from "./config.js";
import { addUserInfo } from "./middlewares/addUserInfo.js";
import Product from "./models/Product.js";
import productRoute from "./routes/products.js";
import { db } from "./util/db-connect.js";

const PORT = process.env.PORT || 3000;
const app = express();
const authOptions = config.authOptions;
const jwtCheck = auth(authOptions);

app.use(cors());
app.use(json());
app.use(jwtCheck);

app.get("/", addUserInfo, async (req, res) => {
  console.debug("request was executed by:", req.userInfo);
  await db.connect();
  const products = await Product.find().populate("categoryId");
  res.json(products);
});

app.use("/", productRoute);

app.listen(PORT, () => {
  console.log("api running on port " + PORT);
});
