const { Schema, model } = require(`mongoose`);
const Post = require(`./postsSchema.js`);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      unique: true,
      type: String,
      trim: true,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      length: 10,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    posts: [
      // Array of Ids from another collection
      {
        type: Schema.Types.ObjectId,
        ref: `Post`,
      },
    ],
  },
  {
    timestamps: true,
    updatedAt: [{ type: Date }],
  }
);

module.exports = new model(`User`, userSchema);
