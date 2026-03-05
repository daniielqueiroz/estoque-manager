import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";

export const validadeRequest = (schema: ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Dados de entrada não conformes com o solicitado",
          issues: error.issues,
        });
      }
      return next(error);
    }
  };
};
