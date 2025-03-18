const { Schema, model } = require(`mongoose`);

const postsSchema = new Schema({
  title: {},
  description: {},
  likes: {},
  comments: {},
});

module.exports = new model(`Post`, postsSchema);
