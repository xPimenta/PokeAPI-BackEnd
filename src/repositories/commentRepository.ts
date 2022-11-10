import { prisma } from "../config/database"
import { CommentTemplate } from "@services/commentService"
import { conflictError } from "@utils/errorUtils"

export const commentRepository = {
	  async getComments(searchData: string) {

		const comments = await prisma.comments.findMany({
			where: {
				pokemon: searchData
			},
			//take: limit,
			//skip: pageOffset
		})
		return comments
	},

	async postComment(uploadInfo: CommentTemplate) {
		const { name, email, comment, pokemon, pokeImageUrl } = uploadInfo
		const newComment = await prisma.comments.create({
			data: {
				name,
				email,
				comment,
				pokemon,
				pokeImageUrl
			},
		})
		
		return newComment
	}
}