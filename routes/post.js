const express = require("express");
const router = express.Router();

// controller
const PostController = require("../controllers/PostController");
// middleware
const verifyToken = require("../middleware/verifyToken");
const checkPost = require("../middleware/checkPost");
const multer = require("../middleware/multer");




router.get("/all-post", PostController.getAllPost);
router.get("/user-post", PostController.getUserPost);

router.post("/create-post", verifyToken, PostController.createPost);
router.delete("/delete-post/:id", verifyToken, checkPost, PostController.deletePost);
router.patch("/edit-post/:id", verifyToken, checkPost, PostController.editPost);

router.put("/like-post/:id", verifyToken, PostController.likePost);
router.put("/unlike-post/:id", verifyToken, PostController.unlikePost);

router.put("/add-comment/:id", verifyToken, PostController.addComment);
router.put("/delete-comment/:id", verifyToken, PostController.deleteComment);

router.post("/upload-single-image", verifyToken, multer.single("file"), PostController.uploadSingleImage)

router.get("/total-post", PostController.totalPost);



module.exports = router;