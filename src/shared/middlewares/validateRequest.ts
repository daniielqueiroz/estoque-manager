import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validadeRequest = (schema: ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.parse(req.body);
    req.body = parsed;
    next();
  };
};
