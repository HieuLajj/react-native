const router = require("express").Router();
const userController= require("../controllers/userController");
const { isAuth } = require("../middlewares/validations/auth");
const { validateUserSignUp, userVlidation, validateUserSignIn } = require("../middlewares/validations/user");
const multer = require('multer');
//const storage = multer.diskStorage({});
const storage = multer.diskStorage({})
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb('invalid image file!', false);
    }
  };
const User =  require('../models/user');
const uploads = multer({ storage, fileFilter });

//ADD USER
router.post("/add_user",validateUserSignUp,userVlidation,userController.add_user);

// SIGN IN
router.post('/sign_in',validateUserSignIn,userVlidation,userController.userSignIn);

//UPLOAD_PROFILE
{profile: 'image'}
router.post('/upload_profile',isAuth, uploads.single('profile'),userController.uploadProfile);

//GET ALL AUTHORS
router.get("/",userController.getAllAuthors);

module.exports = router;