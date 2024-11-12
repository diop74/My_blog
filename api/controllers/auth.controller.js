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

export const signin = async (req,res,next) =>{
    const {email, password} = req.body;

    if (!email || !password || email === "" || password === "") {
        next((
            errorHandler(400, "All fields are required")
        ));
    }

    try {
        const user = await User.findOne({email});
        if (!user) {
            return next(
                errorHandler(404, "User not found")
            );
        }

        const isPasswordValid = bcryptjs.compareSync(password, user.password);
        if (!isPasswordValid) {
            return next(
                errorHandler(401, "Invalid password")
            );
        }
        const token = jwt.sign(
            {id: user._id}, 
            process.env.JWT_SECRET, 
            {expiresIn: "1h"});
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json({message: "User signed in successfully"});
    } catch (err) {
        next(err);
    }
}