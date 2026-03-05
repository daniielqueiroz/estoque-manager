import * as ProductRepository from "./product-repository";

export const listProducts = async () => {
  const data = await ProductRepository.findAll();
  return data;
};
