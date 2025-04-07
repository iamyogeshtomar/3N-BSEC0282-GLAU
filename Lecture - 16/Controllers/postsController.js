const Post = require(`../Schemas/postsSchema.js`);

const showAllPosts = async (req, res) => {
  const allPosts = await Post.find();
  res.render(`showAllPosts.ejs`, { allPosts, msg: req.flash(`loginSuccess`) });
};

const showNewPostForm = (req, res) => {
  res.render(`NewPostForm.ejs`);
};

const addNewPost = async (req, res) => {
  const { title, description, likes } = req.body;
  const newPost = await Post.create({ title, description, likes });
  res.redirect(`/`);
};

module.exports = { showAllPosts, showNewPostForm, addNewPost };
