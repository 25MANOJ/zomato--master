import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: {type: String, requried: true},
    city: {type: String, requried: true},
    address: {type: String, requried: true},
    maplocation: {type: String, requried: true},
    cuisine: [String],
    restaurantTimings: String,
    contactNumber: Number,
    website: String,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
        type: mongoose.Types.ObjectId, ref:"Images"},
        menu: {
            type: mongoose.Types.ObjectId,
            ref:"Menus"
        },
        reviews: [{
            type: mongoose.Types.ObjectId,
            ref:"Reviews"
        }],
        photos:{type: mongoose.Types.ObjectId,
            ref:"Images" }
},{
    timestamps: true
}
);

export const RestaurantModel = mongoose.model("Restaurants",RestaurantSchema);