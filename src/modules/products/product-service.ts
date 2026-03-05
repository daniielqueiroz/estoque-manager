import * as ProductRepository from "./product-repository";
import { CreateProductInput } from "./product-schema";

export const listProducts = async () => {
  const data = await ProductRepository.findAll();
  return data;
};

export const createProduct = async (data: CreateProductInput) => {
  const product = await ProductRepository.create(data);
  return product;
};
