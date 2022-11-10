import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { compareSync } from "bcrypt";
import JWTVerify from ".././utils/JWTVerify";
import "dotenv/config";

import { bearerTokenSchema } from "../schemas/authSchemas";

export function validateSchema(schema: Joi.ObjectSchema) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) throw { type: "wrong_schema", message: validation.error.message };

    next();
  };
}