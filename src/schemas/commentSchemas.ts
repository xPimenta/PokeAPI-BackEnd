import Joi from "joi";

export const commentSchema = Joi.object({
	  comment: Joi.string().required(),
	  name: Joi.string().required(),
	  email: Joi.string().email().required(),
	  pokemon: Joi.string().required()
	});