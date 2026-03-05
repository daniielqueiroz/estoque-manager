import { Router } from "express";
import { getProducts } from "./product-controller";

export const productRouter = Router();

productRouter.get("/", getProducts);
