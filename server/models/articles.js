const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'an article must have a title!']
  },
  content: {
    type: String,
    required: [true, 'an article must have a content']
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},{timestamps:{createdAt:'createdAt'}, versionKey: false})

const Article = mongoose.model('Article',articleSchema)

module.exports = Article