import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { AppError } from "../errors/AppError";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Dados dos inputs não conformes com o solicitado",
      errors: err.issues,
    });
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      return res.status(409).json({
        message: "Violação de campo que deve ser único",
      });
    }

    if (err.code === "P2025") {
      return res.status(404).json({
        message: "Campo não encontrado",
      });
    }
  }

  return res.status(500).json({
    message: "Erro interno na aplicação",
  });
};
