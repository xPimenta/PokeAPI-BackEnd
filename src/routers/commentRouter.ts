import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import * as controller from "../controllers/commentController.js";
import * as schema from "../schemas/commentSchemas.js";

const commentRouter = Router();

commentRouter.post(
  "/postComment",
  validateSchema(schema.commentSchema),
  controller.postComment
);

commentRouter.get(
  "/comments",
  controller.getComments
);

export default commentRouter;