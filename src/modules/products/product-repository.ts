import { prisma } from "../../lib/prisma";
import { CreateProductInput } from "./product-schema";

export const findAll = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export const create = async (data: CreateProductInput) => {
  const user = await prisma.product.create({ data });
  return user;
};
