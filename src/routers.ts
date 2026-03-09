import { Router } from "express";
import { productRouter } from "./modules/products/product-routes";
import { saleRouter } from "./modules/sales/sale-routers";
import { dashboardRouter } from "./modules/dashboard/dashboard-router";

export const router = Router();

router.use("/products", productRouter);
router.use("/sales", saleRouter);
router.use("/dashboard", dashboardRouter);
