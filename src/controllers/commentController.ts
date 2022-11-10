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
	  res.status(200).json(newComment);
}

export async function getComments(req: Request, res: Response) {
	const comments = await commentService.getComments(req.params.pokemon);

	//res.status(200).json(comments);
	console.log(req.params.pokemon)
	//res.status(200).send(req.params.pokemon);
}