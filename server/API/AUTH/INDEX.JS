import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Router = express.Router();

import { UserModel } from "../../database/user";


// signup

Router.post("/signup", async(req,res) => {
    try {


await UserModel.findEmailAndPhone(req.body.credentials);
   
  

    const newUser = await UserModel.create(req.body.credentials);

    const token = newUser.genereteJwtToken();


    return res.status(200).json({token});

    
        
    } catch (error){
        return res.status(500).json({error: error.message});
    }
});


// sign in
Router.post("/signin", async(req,res) => {
    try {

     const doesUserExist = await UserModel.findEmailAndPassword(
       req.body.credentials
       );

    const token = user.genereteJwtToken();


    return res.status(200).json({token, status: "sucess"});
    
        
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
  });
export default Router;