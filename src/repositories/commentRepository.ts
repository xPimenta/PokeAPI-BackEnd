import { prisma } from "../config/database.js"
import { CommentTemplate } from "../services/commentService.js"

export const commentRepository = {
	  async getAllComments(limit: number, page: number) {
		const comments = await prisma.comments.findMany({
			take: limit,
			skip: (page - 1) * limit,
			orderBy: {
				createdAt: "desc"
			}
		})
		return comments
	},

	  async getComments(pokemon: string, limit: number, pageOffset: number) {
		const comments = await prisma.comments.findMany({
			where: {
				pokemon: {
					contains: pokemon
				}
			},
			take: limit,
			skip: (pageOffset -1) * limit,
			orderBy: {
				createdAt: "desc"
			}
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