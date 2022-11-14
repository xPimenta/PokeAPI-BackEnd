"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentRepository = void 0;
var _database = require("../config/database.js");
const commentRepository = {
  async getAllComments(limit, page) {
    const comments = await _database.prisma.comments.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: {
        createdAt: "desc"
      }
    });
    return comments;
  },
  async getComments(pokemon, limit, pageOffset) {
    const comments = await _database.prisma.comments.findMany({
      where: {
        pokemon: {
          contains: pokemon
        }
      },
      take: limit,
      skip: (pageOffset - 1) * limit,
      orderBy: {
        createdAt: "desc"
      }
    });
    return comments;
  },
  async postComment(uploadInfo) {
    const {
      name,
      email,
      comment,
      pokemon,
      pokeImageUrl
    } = uploadInfo;
    const newComment = await _database.prisma.comments.create({
      data: {
        name,
        email,
        comment,
        pokemon,
        pokeImageUrl
      }
    });
    return newComment;
  }
};
exports.commentRepository = commentRepository;