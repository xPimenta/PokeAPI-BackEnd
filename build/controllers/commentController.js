"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComments = getComments;
exports.postComment = postComment;
var _commentService = require("../services/commentService");
var _validateQueryStr = require("../utils/validateQueryStr");
async function postComment(req, res) {
  const {
    name,
    email,
    comment,
    pokemon
  } = req.body;
  const uploadInfo = {
    name,
    email,
    comment,
    pokemon,
    pokeImageUrl: ""
  };
  const newComment = await _commentService.commentService.postComment(uploadInfo);
  res.status(201).send(newComment);
}
async function getComments(req, res) {
  const validatedSearch = await (0, _validateQueryStr.validateQueryStr)(req.query);
  const searchInfo = {
    pokemon: validatedSearch.pokemon,
    limit: validatedSearch.limit,
    page: validatedSearch.page
  };
  const comments = await _commentService.commentService.getComments(searchInfo);
  if (comments.length == 0) {
    res.status(404).send("No comments found");
  } else {
    res.status(200).send(comments);
  }
}