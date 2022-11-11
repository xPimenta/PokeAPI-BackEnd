import { prisma } from "../config/database"
import { CommentTemplate } from "@services/commentService"
import { conflictError } from "@utils/errorUtils"

export const commentRepository = {
	  async getComments(pokemon: string, limit: number, pageOffset: number) {

		const comments = await prisma.comments.findMany({
			where: {
				pokemon: {
					contains: pokemon
				}
			},
			take: limit,
			skip: (pageOffset -1) * limit
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