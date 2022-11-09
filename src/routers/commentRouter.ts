import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import * as controller from "../controllers/commentController";
import * as schema from "../schemas/commentSchemas";

const commentRouter = Router();

commentRouter.post(
  "/postComment",
  validateSchema(schema.postCommentSchema),
  controller.postComment
);

commentRouter.get(
  "/comments/:pokemon",
  controller.getComments
);

export default commentRouter;