const {verifyToken} = require('../helpers/jwt')
const Article = require('../models/articles')

function authorization(req,res,next) {
    Article.findById(req.params.id)
        .then((Article => {
            console.log(req.params)
            console.log(Article)
            if(Article) {
                console.log('asd')
                console.log(Article,'masuk')
                if(Article.userId == req.decoded._id) {
                    next()
                } else {
                    throw {status:403, message:'Unauthorized'}
                }
            } else {
                throw {status:404, message: 'Article not found'}
            }
        }))
        .catch(next)
}

module.exports = authorization