import { Request, Response } from "express";
import * as ProductService from "./product-service";

export const getProducts = async (req: Request, res: Response) => {
  const data = await ProductService.listProducts();
  res.json(data);
};
