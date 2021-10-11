require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

import Auth from "./API/Auth";

import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

zomato.use("/auth", Auth);

zomato.get("/",(req,res) => res.json({message: "set up success 😍"}));

zomato.listen(3000, ()=> 
ConnectDB().then(()=>console.log("server is up and running"))
.catch(()=>console.log("DB connection faild")));

