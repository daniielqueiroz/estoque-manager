import { Router } from "express";
import * as ProductController from "./product-controller";
import { validadeRequest } from "../../shared/middlewares/validateRequest";
import { createProductSchema } from "./product-schema";

export const productRouter = Router();

productRouter.get("/", ProductController.getProducts);
productRouter.post(
  "/",
  validadeRequest(createProductSchema),
  ProductController.postProduct,
);
