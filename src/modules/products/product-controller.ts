import { Request, Response } from "express";
import * as ProductService from "./product-service";
import {
  CreateProductInput,
  findProductIdSchema,
  generateProductReportSchema,
  UpdateProductInput,
} from "./product-schema";

export const postProduct = async (req: Request, res: Response) => {
  const body = req.body as CreateProductInput;
  const data = await ProductService.createProduct(body);
  res.status(201).json(data);
};

export const getProducts = async (req: Request, res: Response) => {
  const data = await ProductService.listProducts();
  res.status(200).json(data);
};

export const getProduct = async (req: Request, res: Response) => {
  const id = req.params;
  const validId = findProductIdSchema.parse(id);

  const data = await ProductService.getProductById(validId);

  return res.status(200).json(data);
};

export const getProductSaleReport = async (req: Request, res: Response) => {
  const id = req.params;
  const validId = findProductIdSchema.parse(id);

  const range = req.query;
  const validRange = generateProductReportSchema.parse(range);

  const productSaleReport = await ProductService.generateProductSaleReport(
    validId,
    validRange,
  );

  return res.status(200).json(productSaleReport);
};

export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params;
  const validId = findProductIdSchema.parse(id);

  const body = req.body as UpdateProductInput;

  const updatedProduct = await ProductService.updateProduct(validId, body);

  return res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params;
  const validId = findProductIdSchema.parse(id);

  await ProductService.deleteProductById(validId);

  return res.status(204).send();
};
