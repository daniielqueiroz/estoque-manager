import * as ProductRepository from "./product-repository";
import {
  CreateProductInput,
  FindProductIdInput,
  UpdateProductInput,
} from "./product-schema";

export const createProduct = async (data: CreateProductInput) => {
  const product = await ProductRepository.create(data);
  return product;
};

export const listProducts = async () => {
  const data = await ProductRepository.findAll();
  return data;
};

export const getProductById = async (productId: FindProductIdInput) => {
  const product = await ProductRepository.findById(productId);
  return product;
};

export const updateProduct = async (
  id: FindProductIdInput,
  data: UpdateProductInput,
) => {
  const updatedProduct = await ProductRepository.update(id, data);
  return updatedProduct;
};

export const deleteProductById = async (productId: FindProductIdInput) => {
  const deleted = await ProductRepository.deleteById(productId);
  return deleted;
};
