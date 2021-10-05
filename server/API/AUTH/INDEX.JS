import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const Router = express.Router();

import { UserModel } from "../../database/user";



Router.post("/signup", async(req,res) => {
    try {
        const { email, password, fullname, phoneNumber } = req.body.ceredentials;

        const checkUserByEmail = await UserModel.findOne({email});
        const checkUserByPhone = await UserModel.findOne({ phoneNumber});
    
    if ( checkUserByEmail || checkUserPhone){
            return res.json({ error: "User already Exists"});
 
    const bcryptSalt = await bcrypt.gensalt(8);

    const hashedPassword = await bcrypt.hash(passowrd, bcryptSalt);

    await UserModel.create({
        ...req.body.credentials,
        password: hashedpassword
    });

    const token = jwt.sign({ user: { fullname, email }}, "ZomatoApp" );
    return res.status(200).json({token});

    }
        
    } catch (error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;