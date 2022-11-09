import Joi from "joi";

export const postCommentSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  comment: Joi.string().required(),
});
