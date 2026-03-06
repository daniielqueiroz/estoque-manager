import { Router } from "express";
import { productRouter } from "./modules/products/product-routes";
import { saleRouter } from "./modules/sales/sale-routers";

export const router = Router();

router.use("/products", productRouter);
router.use("/sales", saleRouter);
