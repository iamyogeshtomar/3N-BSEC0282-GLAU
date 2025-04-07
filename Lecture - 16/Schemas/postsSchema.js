const { Schema, model } = require(`mongoose`);

const postsSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: `No Description Available!!!`,
  },
  likes: {
    type: Number,
    min: 0,
    default: 0,
  },
  // comments: {},
});

module.exports = new model(`Post`, postsSchema);
