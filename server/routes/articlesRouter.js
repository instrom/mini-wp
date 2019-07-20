const router = require('express').Router()
const ArticleController = require('../controllers/articleController')
router.post('/createArticle',ArticleController.create)
router.get('/findArticle',ArticleController.findAll)
router.delete('/deleteArticle/:id',ArticleController.destroy)
router.get('/:id',ArticleController.findOne)
router.patch('/:id',ArticleController.update)
module.exports = router
