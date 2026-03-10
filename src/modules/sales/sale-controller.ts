import { Request, Response } from "express";
import {
  CreateSaleInput,
  findSaleIdSchema,
  generateSaleReportSchema,
} from "./sale-schema";
import * as SaleService from "./sale-service";

export const postSale = async (req: Request, res: Response) => {
  const body = req.body as CreateSaleInput;

  const sale = await SaleService.createSale(body);

  return res.status(201).json(sale);
};

export const getSales = async (req: Request, res: Response) => {
  const page = Math.max(Number(req.query.page) || 1, 1);
  const limit = Math.min(Number(req.query.limit) || 10, 50);

  const sales = await SaleService.listSales(page, limit);
  return res.status(200).json(sales);
};

export const getSale = async (req: Request, res: Response) => {
  const id = req.params;
  const validId = findSaleIdSchema.parse(id);

  const sale = await SaleService.searchSaleById(validId);

  res.status(200).json(sale);
};

export const getSaleReport = async (req: Request, res: Response) => {
  const range = req.query;
  const validRange = generateSaleReportSchema.parse(range);

  const saleReport = await SaleService.generateSaleReport(validRange);

  return res.status(200).json(saleReport);
};

export const cancelSale = async (req: Request, res: Response) => {
  const id = req.params;
  const validId = findSaleIdSchema.parse(id);

  await SaleService.cancelSaleById(validId);

  return res.status(204).send();
};
