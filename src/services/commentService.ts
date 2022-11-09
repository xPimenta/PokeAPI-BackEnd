import { getPokemonImg } from "@utils/pokeAPI"
import { commentRepository } from "@repositories/commentRepository"
import { comments } from "@prisma/client"

export const commentService = {
  async postComment(uploadInfo: comments) {
    const UploadUrls = await getPokemonImg(uploadInfo)
    return UploadUrls
  },
  
  async getComments(searchData: string) {
    const comments = await commentRepository.getComments(searchData)
    return comments
  }
}
