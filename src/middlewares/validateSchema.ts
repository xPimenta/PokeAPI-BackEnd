import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { errorFactory } from "@utils/errorFactory";

export function validateSchema(schema: Joi.ObjectSchema) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) throw errorFactory("error_invalid_body", "true");
    next();
  };
}