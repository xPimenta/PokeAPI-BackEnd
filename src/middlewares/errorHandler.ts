import { errorTypeToStatusCode } from "@utils/errorUtils";
import { Request, Response, NextFunction } from "express";

export function errorHandler( err: any, _req: Request, res: Response, _next: NextFunction ) {
  const message =  err.message ||"Something went wrong";

  const status = errorTypeToStatusCode(err.type);
  res.status(status).json({ message });
}