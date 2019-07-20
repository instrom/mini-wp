const Article = require('../models/articles')

class ArticleController {
  static create(req,res,next) {
    Article.create(req.body)
      .then((datas) => {
        res.status(201).json(datas)
      })
      .catch(next)
  }

  static findAll(req,res,next) {
    Article.find()
      .then((allArticles) => {
        // console.log(allArticles)
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
    Article.findById(req.params.id)
      .then((datas) => {
        if(datas) {
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
          datas.title = req.body.title
          datas.content = req.body.content
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