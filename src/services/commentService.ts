import { getPokemonImg } from "@utils/pokeAPI"
import { commentRepository } from "@repositories/commentRepository"
import { comments } from "@prisma/client"

export type OmitComments = Omit<comments, "id" | "createdAt">
export type CommentTemplate = OmitComments & {
  name: string
  email: string
  comment: string
  pokemon: string
  pokeImageUrl: string
}

export type SearchTemplate = {
  pokemon: string
  limit: number
  page: number
}

export const commentService = {
  async postComment(uploadInfo: CommentTemplate) {
    const pokeImageUrl = await getPokemonImg(uploadInfo.pokemon)

    const newComment = await commentRepository.postComment({
      ...uploadInfo,
      pokeImageUrl,
    })

    return newComment
  },

  async getComments(searchInfo: SearchTemplate) {
    const { pokemon, limit, page } = searchInfo

    if (pokemon == "all") {
      const comments = await commentRepository.getAllComments(limit, page)
      return comments
    } else {
      const comments = await commentRepository.getComments(pokemon, limit, page)
      return comments
    }
  },
}
