import { prisma } from "../config/database"
import { CommentTemplate } from "@services/commentService"

export const commentRepository = {
	  async getComments(searchData: string) {

		const comments = await prisma.comments.findMany({
			where: {
				pokemon: searchData
			}
		})
		return comments
	},

	async postComment(uploadInfo: CommentTemplate) {
		const { name, email, comment, pokemon } = uploadInfo
		const newComment = await prisma.comments.create({
			data: {
				name,
				email,
				comment,
				pokemon,
				
			}
		})
		return newComment
	}
}