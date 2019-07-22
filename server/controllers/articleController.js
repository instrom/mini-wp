const Article = require('../models/articles')

class ArticleController {
  static create(req,res,next) {
    Article.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.decoded._id,
      imageUrl: req.body.imageUrl
    })
      .then((datas) => {
        res.status(201).json(datas)
      })
      .catch(next)
  }

  static findMyArticles(req,res,next) {
    Article.find({userId: req.decoded._id}).populate('userId')
      .then((dataFound) => {
        res.status(200).json(dataFound)
      })
      .catch(next)
  }

  static findAll(req,res,next) {
    Article.find().populate('userId')
      .then((allArticles) => {
        console.log('asd')
        console.log(allArticles)
        res.status(200).json(allArticles)
      })
      .catch(next)
  }

  static destroy(req,res,next) {
    Article.findByIdAndDelete(req.params.id)
      .then((datas) => {
        if(datas) {
          res.status(200).json(datas)
        } else {
          throw {status: 404, message: 'Id not found'}
        }
      })
      .catch(next)
  }

  static findOne(req,res,next) {
    Article.findById(req.params.id).populate('userId')
      .then((datas) => {
        if(datas) {
          // console.log(datas)
          res.status(200).json(datas)
        } else {
          throw {status: 404, message: 'data not found'}
        }
      })
      .catch(next)
  }

  static update(req,res,next) {
    Article.findById(req.params.id)
      .then((datas) => {
        if(datas) {
          console.log(datas,'asdasdadssad')
          datas.title = req.body.title
          datas.content = req.body.content
          datas.imageUrl = req.body.imageUrl
          datas.save()
          // console.log(datas);
          res.status(200).json(datas)
        } else {
          throw {status: 404, message: 'data not found'}
        }
      })
      .catch(next)
  }
}

module.exports = ArticleController