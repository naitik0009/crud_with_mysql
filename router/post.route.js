const express = require("express");
const {getAllPost,getPostById,createNewPost} = require("../controller/post.controller");
const routes = express.Router();

routes.route("/products").get(getAllPost).post(createNewPost);
routes.route("/products/:id").get(getPostById);

module.exports=routes;