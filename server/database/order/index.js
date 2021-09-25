import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
user:{
    type: mongoose.Tyoes.ObjectId,
    ref: "Users"
},
orderDetails:[
    {
        food:{type: mongoose.Types.ObjectId,
        ref: "Foods"},
        quantity: {type: Number, requried: true},
        paymode: {type: String, requried: true},
        status: {type: String, default: "placed"},
        paymentDetails:{
            itemTotal:{type: Number,requried: true},
            promo:{ type:Number,requried: true},
            tax: { type: Number,requried: true}
        }
    }
],
orderRatings: {
    type:Number,
    requried: true
}
},
{
    timestamps: true
}
);


export const OrderModel = mongoose.model("Orders",OrderSchema); 