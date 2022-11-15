"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentService = void 0;
var _pokeAPI = require("../utils/pokeAPI");
var _commentRepository = require("../repositories/commentRepository");
const commentService = {
  async postComment(uploadInfo) {
    const pokeImageUrl = await (0, _pokeAPI.getPokemonImg)(uploadInfo.pokemon);
    const newComment = await _commentRepository.commentRepository.postComment({
      ...uploadInfo,
      pokeImageUrl
    });
    return newComment;
  },
  async getComments(searchInfo) {
    const {
      pokemon,
      limit,
      page
    } = searchInfo;
    if (pokemon == "all") {
      const comments = await _commentRepository.commentRepository.getAllComments(limit, page);
      return comments;
    } else {
      const comments = await _commentRepository.commentRepository.getComments(pokemon, limit, page);
      return comments;
    }
  }
};
exports.commentService = commentService;