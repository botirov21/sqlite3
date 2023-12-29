const { Router } = require('express');
const { getAllPosts, addNewPost , updatePost, getPostById, deletePost } = require('../controller/post.controller');

const router = Router();
    
router.get("/all", getAllPosts )
router.get("/:id", getPostById )
router.post("/add", addNewPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

module.exports = router;