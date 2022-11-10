import { getPokemonImg } from "@utils/pokeAPI"
import { commentRepository } from "@repositories/commentRepository"
import { comments } from "@prisma/client"
import { conflictError, notFoundError } from "@utils/errorUtils"


export type OmitComments = Omit<comments, "id" | "createdAt">
export type CommentTemplate = OmitComments & {
	name: string
	email: string
	comment: string
	pokemon: string
	pokeImageUrl: string
}

export const commentService = {
  async postComment(uploadInfo: CommentTemplate) {
	const pokeImageUrl = await getPokemonImg(uploadInfo.pokemon)

	if(!pokeImageUrl) {
		throw notFoundError("Pokemon not found")
	}

	const newComment = await commentRepository.postComment({
		...uploadInfo,
		pokeImageUrl
	})

	if(!newComment) {
		throw conflictError("Comment already exists")
	}

	return newComment
  },
  
  async getComments(searchData: string) {
    const comments = await commentRepository.getComments(searchData)

	if(!comments) {
		throw notFoundError("No comments found")
	}
	
    return comments
  }
}
