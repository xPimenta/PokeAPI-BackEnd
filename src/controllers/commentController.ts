import { Request, Response } from "express";
import { commentService } from "../services/commentService";

import { CommentTemplate } from "../services/commentService";

export async function postComment(req: Request, res: Response) {
	  const { name, email, comment, pokemon } = req.body;
	  const uploadInfo: CommentTemplate = {
		name,
		email,
		comment,
		pokemon,
		pokeImageUrl: ""
	  };
	  
	  const newComment = await commentService.postComment(uploadInfo);
	  res.status(201).send(newComment);
}

export async function getComments(req: Request, res: Response) {
	  const { pokemon , limit, page } = req.query;

	  const comments = await commentService.getComments(pokemon as string, limit as string, page as string);
	  
	res.status(200).send(comments);
}