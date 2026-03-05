import { Router } from "express";
import { productRouter } from "./modules/products/product-routes";

export const router = Router();

router.use("/products", productRouter);
