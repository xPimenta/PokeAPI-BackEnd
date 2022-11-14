import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import * as controller from "../controllers/commentController";
import * as schema from "../schemas/commentSchemas";

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