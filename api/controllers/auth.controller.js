import User from "../modules/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";



export const signup = async (req,res,next) =>{
    const {username, email, password} = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "") {
        return next(
            errorHandler(400, "All fields are required")
        );
    }

    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashPassword,
    });
    
    try {
        await newUser.save();
    res.status(201).json({message: "User created successfully"});
    } catch (err) {
        next(err);
    }
    


}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password || email === '' || password === '') {
      next(errorHandler(400, 'All fields are required'));
    }
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, 'User not found'));
      }
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(400, 'Invalid password'));
      }
      const token = jwt.sign(
        { id: validUser._id, isAdmin: validUser.isAdmin },
        process.env.JWT_SECRET
      );
  
      const { password: pass, ...rest } = validUser._doc;
  
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } catch (error) {
      next(error);
    }
  };

export const google = async (req,res,next) =>{
    const {email, name,photoURL} = req.body;
    try{
        const user = await User.findOne({email});
        if(user){
            const token = jwt.sign(
                {id: user._id, isAdmin: user.isAdmin},
                process.env.JWT_SECRET,
                {expiresIn: "1h"});
            const {password,...rest} = user._doc;
            return res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }else{
            const genPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashPassword = bcryptjs.hashSync(genPassword, 10);
            const newUser = new User({
                username:name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashPassword,
                profilePicture:photoURL,
            });
            await newUser.save();
            const token = jwt.sign(
                {id: newUser._id},
                process.env.JWT_SECRET,
                {expiresIn: "1h"});

            const {password,...rest} = newUser._doc;
            return res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json({message: "User signed in successfully"});
        }
        
    }catch(err){
        next(err);
    }
};