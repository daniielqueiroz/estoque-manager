import { Request, Response } from "express";
import { CreateSaleInput } from "./sale-schema";
import * as SaleService from "./sale-service";

export const createSale = async (req: Request, res: Response) => {
  const body = req.body as CreateSaleInput;

  try {
    const sale = await SaleService.createSale(body);

    return res.status(200).json(sale);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: "Erro interno" });
  }
};
