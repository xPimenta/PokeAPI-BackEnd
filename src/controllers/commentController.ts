import { Request, Response } from "express";
import { commentService, CommentTemplate, SearchTemplate } from "../services/commentService.js";
import { validateQueryStr } from "../utils/validateQueryStr.js";

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
	  const validatedSearch = await validateQueryStr(req.query);

	  const searchInfo: SearchTemplate = {
		pokemon: validatedSearch.pokemon,
		limit: validatedSearch.limit,
		page: validatedSearch.page
	  };
	  
	  const comments = await commentService.getComments(searchInfo);
	  if (comments.length == 0) {
		res.status(404).send("No comments found");
	  } else {	  
		res.status(200).send(comments);
	  }
}