const jwt =  require('jsonwebtoken');
const User = require("../models/user");
const sharp = require('sharp');
const cloudinary = require('../helper/imageUpload')
const userController = {
    //ADD USER
    add_user: async(req,res)=>{
        const {name,email,password,phone} = req.body
        const isNewUser = await User.isThisEmailInUse(email);
        if (!isNewUser){
            return res.json({
                success: false,
                message: 'This email is already in use, try sign-in',
            });}
        else{
            const user = await User({
               name,
               email,
               password,
               phone,
            });
            await user.save();
            res.json(user);
        }
    },

    //SIGN IN
    userSignIn: async(req,res)=>{
        const { email, password } = req.body;
        console.log("ffwfaewfa");
       // req.profile="hieu"
      //  console.log(req.profile);
        const user = await User.findOne({ email });
      
        if (!user)
          return res.json({
            success: false,
            message: 'user not found, with the given email!',
          });
      
        const isMatch = await user.comparePassword(password);
        if (!isMatch)
          return res.json({
            success: false,
            message: 'email / password does not match!',
          });
        const token =  jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn:'1d'});

        const userInfo = {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          avg: user.avg,
         // password: user.password,
          avatar: user.avatar ? user.avatar : '',
        }
        res.json({success: true,user:userInfo, token})
    },
  //UPLOAD PROFILE
    uploadProfile : async (req,res)=>{
      const {user} = req;
      if(!user) return res
          .status(401)
          .json({success:false, message: 'unauthorized acesss'
           })
      try {
        const result = await cloudinary.uploader.upload(req.file.path,{
          public_id: `${user._id}_profile`,
          width: 500,
          height:500,
          crop: 'fill'
        });
        await User.findByIdAndUpdate(user._id,{avatar: result.url})
        res.status(201).json({
          success: true,
          message: 'Your Profile has updateed'
        })
  
      } catch (error) {
      res.status(500).json({
          success: false,
          message: 'Server error,try after some time'
      })
         console.log('Eroor while uploading profile imge',error.message)
      }
    },

    //GET ALL AUTHORS

    getAllAuthors: async(req,res)=>{
       try{
           const authors = await User.find();
           res.status(200).json(authors);
       }catch(err){
           res.status(500).json(err);
       }
    },
}

module.exports = userController;