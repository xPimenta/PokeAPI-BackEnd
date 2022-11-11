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
  
  async getComments(pokemon: string, limit: string, pageOffset: string) {

	if(parseInt(limit) == NaN || parseInt(pageOffset) == NaN) {
		throw notFoundError("Invalid limit or pageOffset")
	}

	if(limit == "") { limit = "10"}
	if(pageOffset == "") { pageOffset = "1"}

	const comments = await commentRepository.getComments(pokemon, (parseInt(limit)), parseInt(pageOffset))

	if(!comments) {
		throw notFoundError("No comments found")
	}
	
    return comments
  }
}
