import { Request, Response } from "express";
import { commentService } from "../services/commentService";

export async function postComment(req: Request, res: Response) {
	await commentService.postComment(req.body);

	res.status(201).send("Comment created");
}

export async function getComments(req: Request, res: Response) {
	const comments = await commentService.getComments(req.body);

	res.status(200).json(comments);
}