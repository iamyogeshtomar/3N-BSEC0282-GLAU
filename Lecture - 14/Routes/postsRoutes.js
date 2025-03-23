const express = require(`express`);
const router = express.Router();
const {
  showAllPosts,
  showNewPostForm,
  addNewPost,
} = require(`../Controllers/postsController.js`);

router.get(`/`, showAllPosts);

router.get(`/new`, showNewPostForm);

router.post(`/`, addNewPost);

module.exports = router;
