import { Request, Response } from "express";
import * as ProductService from "./product-service";
import { CreateProductInput } from "./product-schema";

export const getProducts = async (req: Request, res: Response) => {
  const data = await ProductService.listProducts();
  res.status(200).json(data);
};

export const postProduct = async (req: Request, res: Response) => {
  const body = req.body as CreateProductInput;
  const data = await ProductService.createProduct(body);
  res.status(201).json(data);
};
