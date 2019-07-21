const router = require('express').Router()
const UserController = require('../controllers/userController')
const images = require('../helpers/images')

router.post('/register',UserController.create)
router.post('/login',UserController.login)
router.post('/googleSignIn',UserController.googleSignIn)
router.post('/googleCloudStorage', 
    images.multer.single('image'), 
    images.sendUploadToGCS,
    (req,res,next)=>{
        let imageLink = req.file.cloudStoragePublicUrl
        res.status(200).json(imageLink)
    }
)


module.exports = router
