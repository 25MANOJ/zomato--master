import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, requried: true},
    email: {type: String, requried: true},
    password: {type: String},
    address: [{detail: {type: String}, for:{type:String}}],
    phoneNumber: [{type: Number}]
},{
    timestamps: true
}
);

export const UserModel = mongoose.model("Users", UserSchema);